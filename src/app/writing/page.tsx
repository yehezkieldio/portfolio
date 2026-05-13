import type { Metadata } from "next";
import { PageHeader, PageSection } from "#/app/_component/content-primitives";
import { getMediumPosts } from "#/lib/medium";
import { MediumLink } from "./_component/medium-link";
import { WritingList } from "./_component/writing-list";

export const metadata: Metadata = {
    description: "Writing by Yehezkiel Dio Sinolungan, mirrored from Medium.",
    title: "Writing",
};

export default async function WritingPage() {
    const posts = await getMediumPosts();

    return (
        <div className="writing-page-surface">
            <div aria-hidden="true" className="writing-page-ambient" />
            <PageSection>
                <PageHeader
                    description={
                        <>
                            Pulled from my <MediumLink /> account.
                        </>
                    }
                    title="Writing"
                />
                <WritingList posts={posts} />
            </PageSection>
        </div>
    );
}
