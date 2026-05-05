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
        <div className="space-y-7 border-border border-t pt-6">
            {posts.map((post) => (
                <article className="space-y-2" key={post.link}>
                    <p className="font-mono text-muted-foreground text-xs">{post.publishedLabel}</p>
                    <h2 className="font-medium text-sm">
                        <a className="hover:text-muted-foreground" href={post.link}>
                            {post.title}
                        </a>
                    </h2>
                    <p className="text-muted-foreground text-sm leading-6">{post.excerpt}</p>
                    {post.categories.length > 0 ? (
                        <p className="font-mono text-[11px] text-muted-foreground/70">
                            {post.categories.slice(0, 4).join(" / ")}
                        </p>
                    ) : null}
                </article>
            ))}
        </div>
    );
}
