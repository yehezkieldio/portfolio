import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentMeta } from "#/app/_component/content-primitives";
import { ArticleHeader, MdxBody, mdxComponents } from "#/app/_component/mdx-content";
import { getNote, getNotes } from "#/lib/notes";

type NotePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
    const { slug } = await params;
    const note = getNote(slug);

    if (!note) {
        return {
            title: "Note",
        };
    }

    return {
        description: note.description,
        title: note.title,
    };
}

export default async function NotePage({ params }: NotePageProps) {
    const { slug } = await params;
    const note = getNote(slug);

    if (!note) {
        notFound();
    }

    const Body = note.body;

    return (
        <article className="space-y-9">
            <ArticleHeader
                description={note.description}
                meta={note.date ? <ContentMeta>{note.date}</ContentMeta> : undefined}
                tags={note.tags}
                title={note.title}
            />

            <MdxBody>
                <Body components={mdxComponents} />
            </MdxBody>
        </article>
    );
}
