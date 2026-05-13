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
        <ContentList className="space-y-9 sm:space-y-10" withTopRule>
            {posts.map((post, index) => (
                <ContentRow delayIndex={index} key={post.link} withRule={false}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h2 className="min-w-0 font-medium text-[13px] leading-tight tracking-normal sm:text-sm sm:leading-tight">
                            <ContentTitleLink href={post.link} isExternal>
                                {post.title}
                            </ContentTitleLink>
                        </h2>
                        <ContentMeta>{post.publishedLabel}</ContentMeta>
                    </div>
                    <p className="text-[13.5px] text-muted-foreground leading-[1.55] tracking-normal sm:text-sm sm:leading-6">
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
