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
const ITEM_REGEX = /<item>([\s\S]*?)<\/item>/g;
const WHITESPACE_REGEX = /\s+/g;
const CATEGORY_REGEX = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
const DATE_FORMATTER = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
});

function readTag(item: string, tag: string) {
    const cdataOpen = `<${tag}`;
    const start = item.indexOf(cdataOpen);

    if (start === -1) {
        return "";
    }

    const openEnd = item.indexOf(">", start);
    const close = item.indexOf(`</${tag}>`, openEnd);

    if (openEnd === -1 || close === -1) {
        return "";
    }

    const raw = item.slice(openEnd + 1, close);
    return raw.startsWith("<![CDATA[") && raw.endsWith("]]>") ? raw.slice(9, -3) : raw;
}

function decodeXml(value: string) {
    return value
        .replaceAll("&amp;", "&")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'");
}

function textFromHtml(value: string) {
    return decodeXml(value).replace(HTML_TAG_REGEX, " ").replace(WHITESPACE_REGEX, " ").trim();
}

export function parseMediumFeed(xml: string): MediumPost[] {
    return Array.from(xml.matchAll(ITEM_REGEX), (match) => {
        const item = match[1] ?? "";
        const publishedAt = readTag(item, "pubDate");
        const categories = Array.from(item.matchAll(CATEGORY_REGEX), (category) => category[1] ?? "");

        return {
            title: decodeXml(readTag(item, "title")),
            link: decodeXml(readTag(item, "link")).replace(MEDIUM_SOURCE_QUERY_REGEX, ""),
            publishedAt,
            publishedLabel: DATE_FORMATTER.format(new Date(publishedAt)),
            excerpt: textFromHtml(readTag(item, "content:encoded")).slice(0, 180),
            categories,
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
