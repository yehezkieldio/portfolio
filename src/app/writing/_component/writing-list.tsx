import {
    ContentList,
    ContentMeta,
    ContentRow,
    ContentTags,
    ContentTitleLink,
} from "#/app/_component/content-primitives";

type WritingPost = {
    categories: string[];
    excerpt: string;
    link: string;
    publishedLabel: string;
    title: string;
};

type WritingListProps = {
    posts: WritingPost[];
};

export function WritingList({ posts }: WritingListProps) {
    if (posts.length === 0) {
        return <p className="text-muted-foreground text-sm">Medium posts could not be loaded right now.</p>;
    }

    return (
        <ContentList withTopRule>
            {posts.map((post, index) => (
                <ContentRow delayIndex={index} key={post.link} withRule={false}>
                    <ContentMeta>{post.publishedLabel}</ContentMeta>
                    <h2 className="font-medium text-[13px] leading-[1.25] tracking-normal sm:text-sm sm:leading-tight">
                        <ContentTitleLink href={post.link} isExternal>
                            {post.title}
                        </ContentTitleLink>
                    </h2>
                    <p className="text-[13.5px] text-muted-foreground leading-[1.55] tracking-normal sm:text-sm sm:leading-6">
                        {post.excerpt}
                    </p>
                    <ContentTags limit={4} tags={post.categories} />
                </ContentRow>
            ))}
        </ContentList>
    );
}
