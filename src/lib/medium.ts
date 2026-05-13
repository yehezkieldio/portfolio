import { XMLParser } from "fast-xml-parser";

type MediumPost = {
    title: string;
    link: string;
    publishedAt: string;
    publishedLabel: string;
    excerpt: string;
    categories: string[];
};

const MEDIUM_FEED_URL = "https://medium.com/feed/@yehezkieldio";
const EXCERPT_MAX_LENGTH = 260;
const EXCERPT_MIN_COMPLETE_LENGTH = 90;
const EXCERPT_TARGET_LENGTH = 210;
const MEDIUM_SOURCE_QUERY_REGEX = /\?source=.*$/;
const BLOCK_END_TAG_REGEX = /<\/(?:blockquote|div|h[1-6]|li|p)>/gi;
const CLAUSE_BOUNDARY_REGEX = /[,;:]\s/g;
const HTML_TAG_REGEX = /<[^>]+>/g;
const SENTENCE_END_REGEX = /[.!?]["')\]]?\s/g;
const TRAILING_EXCERPT_PUNCTUATION_REGEX = /[\s,;:.-]+$/;
const WHITESPACE_REGEX = /\s+/g;
const DATE_FORMATTER = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
});

const mediumFeedParser = new XMLParser({
    ignoreAttributes: true,
    isArray: (_name, jpath) => jpath === "rss.channel.item" || jpath === "rss.channel.item.category",
    trimValues: true,
});

type ParsedMediumFeed = {
    rss?: {
        channel?: {
            item?: ParsedMediumItem[];
        };
    };
};

type ParsedMediumItem = {
    category?: string[];
    "content:encoded"?: string;
    link?: string;
    pubDate?: string;
    title?: string;
};

function textBlocksFromHtml(value: string) {
    return value
        .replace(BLOCK_END_TAG_REGEX, "\n")
        .replace(HTML_TAG_REGEX, " ")
        .split("\n")
        .map((block) => block.replace(WHITESPACE_REGEX, " ").trim())
        .filter(Boolean);
}

function selectExcerptSource(value: string) {
    const blocks = textBlocksFromHtml(value);
    const substantialBlock = blocks.find((block) => block.length >= EXCERPT_MIN_COMPLETE_LENGTH);

    return substantialBlock ?? blocks.join(" ");
}

function sentenceSegments(value: string) {
    if (typeof Intl.Segmenter === "function") {
        const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });

        return Array.from(segmenter.segment(value), ({ segment }) => segment.trim()).filter(Boolean);
    }

    return value
        .replaceAll(SENTENCE_END_REGEX, (match) => `${match.trimEnd()}\n`)
        .split("\n")
        .map((sentence) => sentence.trim())
        .filter(Boolean);
}

function completeSentenceExcerpt(text: string) {
    const sentences = sentenceSegments(text);
    const candidates: string[] = [];
    let excerpt = "";

    for (const sentence of sentences) {
        const nextExcerpt = excerpt ? `${excerpt} ${sentence}` : sentence;

        if (nextExcerpt.length > EXCERPT_MAX_LENGTH) {
            break;
        }

        excerpt = nextExcerpt;
        candidates.push(excerpt);
    }

    return (
        candidates
            .filter((candidate) => candidate.length >= EXCERPT_MIN_COMPLETE_LENGTH)
            .sort(
                (a, b) => Math.abs(a.length - EXCERPT_TARGET_LENGTH) - Math.abs(b.length - EXCERPT_TARGET_LENGTH)
            )[0] ?? null
    );
}

function wordBoundaryExcerpt(text: string) {
    const previewWindow = text.slice(0, EXCERPT_MAX_LENGTH + 1);
    const clauseBoundaries = Array.from(previewWindow.matchAll(CLAUSE_BOUNDARY_REGEX));
    const lastClauseBoundary = clauseBoundaries.at(-1);

    if (
        lastClauseBoundary &&
        lastClauseBoundary.index !== undefined &&
        lastClauseBoundary.index >= EXCERPT_MIN_COMPLETE_LENGTH
    ) {
        return previewWindow.slice(0, lastClauseBoundary.index).replace(TRAILING_EXCERPT_PUNCTUATION_REGEX, "");
    }

    const lastWordBoundary = previewWindow.lastIndexOf(" ", EXCERPT_MAX_LENGTH);

    if (lastWordBoundary === -1) {
        return text;
    }

    return text.slice(0, lastWordBoundary).replace(TRAILING_EXCERPT_PUNCTUATION_REGEX, "");
}

function createExcerpt(value: string) {
    const text = selectExcerptSource(value).replace(WHITESPACE_REGEX, " ").trim();

    if (text.length <= EXCERPT_MAX_LENGTH) {
        return text;
    }

    return completeSentenceExcerpt(text) ?? wordBoundaryExcerpt(text);
}

function formatPublishedDate(publishedAt: string) {
    const date = new Date(publishedAt);

    if (Number.isNaN(date.valueOf())) {
        return publishedAt;
    }

    return DATE_FORMATTER.format(date);
}

export function parseMediumFeed(xml: string): MediumPost[] {
    const feed = mediumFeedParser.parse(xml) as ParsedMediumFeed;
    const items = feed.rss?.channel?.item ?? [];

    return items.map((item) => {
        const publishedAt = item.pubDate ?? "";

        return {
            title: item.title ?? "",
            link: (item.link ?? "").replace(MEDIUM_SOURCE_QUERY_REGEX, ""),
            publishedAt,
            publishedLabel: formatPublishedDate(publishedAt),
            excerpt: createExcerpt(item["content:encoded"] ?? ""),
            categories: item.category ?? [],
        };
    });
}

export async function getMediumPosts() {
    const response = await fetch(MEDIUM_FEED_URL, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        return [];
    }

    return parseMediumFeed(await response.text());
}
