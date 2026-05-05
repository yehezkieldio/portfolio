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
const MEDIUM_SOURCE_QUERY_REGEX = /\?source=.*$/;
const HTML_TAG_REGEX = /<[^>]+>/g;
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

function textFromHtml(value: string) {
    return value.replace(HTML_TAG_REGEX, " ").replace(WHITESPACE_REGEX, " ").trim();
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
            excerpt: textFromHtml(item["content:encoded"] ?? "").slice(0, 180),
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
