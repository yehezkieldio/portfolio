import {
    ContentList,
    ContentMeta,
    ContentRow,
    ContentTags,
    ContentTitleLink,
    EmptyLine,
    PageHeader,
    PageSection,
} from "#/app/_component/content-primitives";
import { getNotes } from "#/lib/notes";

export default function NotesPage() {
    const notes = getNotes();

    return (
        <PageSection>
            <PageHeader description="Shorter technical notes, sketches, and working thoughts." title="Notes" />

            <ContentList
                empty={<EmptyLine>Notes will show up here once they are added.</EmptyLine>}
                isEmpty={notes.length === 0}
            >
                {notes.map((note, index) => (
                    <ContentRow delayIndex={index} key={note.slug}>
                        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                            <h2 className="min-w-0 font-medium text-[13px] leading-[1.25] tracking-normal sm:text-sm sm:leading-tight">
                                <ContentTitleLink href={`/writing/notes/${note.slug}`}>{note.title}</ContentTitleLink>
                            </h2>
                            {note.date ? <ContentMeta>{note.date}</ContentMeta> : null}
                        </div>

                        {note.description ? (
                            <p className="max-w-xl text-[13.5px] text-muted-foreground leading-[1.55] tracking-normal sm:text-sm sm:leading-6">
                                {note.description}
                            </p>
                        ) : null}

                        <ContentTags tags={note.tags} />
                    </ContentRow>
                ))}
            </ContentList>
        </PageSection>
    );
}
