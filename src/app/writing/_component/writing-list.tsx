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
        <ContentList className="space-y-9 pt-10 sm:space-y-10 sm:pt-12" withTopRule>
            {posts.map((post, index) => (
                <ContentRow delayIndex={index} key={post.link} withRule={false}>
                    <div className="flex flex-col items-start justify-between gap-x-4 gap-y-1 sm:flex-row sm:items-baseline">
                        <ContentMeta className="pb-1 sm:pb-0">{post.publishedLabel}</ContentMeta>
                        <h2 className="min-w-0 font-medium text-[12.5px] leading-tight tracking-normal sm:order-first sm:text-sm sm:leading-tight">
                            <ContentTitleLink href={post.link} isExternal>
                                {post.title}
                            </ContentTitleLink>
                        </h2>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-[1.55] tracking-normal sm:text-sm sm:leading-6">
                        {post.excerpt}
                    </p>
                    <div className="[&>p]:wrap-break-word min-w-0 [&>p]:whitespace-normal [&>p]:text-wrap [&>p]:text-[9.75px] [&>p]:leading-[1.7] sm:[&>p]:text-[11px] sm:[&>p]:leading-4">
                        <ContentTags limit={4} tags={post.categories} />
                    </div>
                </ContentRow>
            ))}
        </ContentList>
    );
}
