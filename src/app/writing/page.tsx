import { getMediumPosts } from "#/lib/medium";
import { WritingList } from "./_component/writing-list";

export default async function WritingPage() {
    const posts = await getMediumPosts();

    return (
        <section className="space-y-8">
            <header className="space-y-3">
                <h1 className="font-semibold text-2xl leading-tight">Writing</h1>
                <p className="max-w-xl text-muted-foreground/95 leading-7">
                    Pulled from my{" "}
                    <a className="underline hover:text-muted-foreground" href="https://medium.com/@yehezkiel">
                        Medium
                    </a>{" "}
                    account.
                </p>
            </header>
            <WritingList posts={posts} />
        </section>
    );
}
