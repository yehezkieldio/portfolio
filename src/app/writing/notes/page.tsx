import Link from "next/link";
import { getNotes } from "#/lib/notes";

export default function NotesPage() {
    const notes = getNotes();

    return (
        <section className="space-y-8">
            <header className="project-row-enter space-y-3">
                <h1 className="font-semibold text-2xl leading-tight">Notes</h1>
                <p className="max-w-xl text-muted-foreground/95 leading-7">
                    Shorter technical notes, sketches, and working thoughts.
                </p>
            </header>

            <div>
                {notes.length > 0 ? (
                    notes.map((note, index) => (
                        <article
                            className="project-row-enter motion-row group space-y-2 border-border border-b py-6 transition-[transform] duration-200 ease-(--ease-ui) sm:py-7"
                            key={note.slug}
                            style={{ animationDelay: `${index * 45}ms` }}
                        >
                            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                                <h2 className="min-w-0 font-medium text-sm leading-tight">
                                    <Link
                                        className="motion-link motion-title-link"
                                        href={`/writing/notes/${note.slug}`}
                                        transitionTypes={["nav-forward"]}
                                    >
                                        {note.title}
                                    </Link>
                                </h2>
                                {note.date ? (
                                    <p className="font-mono text-muted-foreground text-xs">{note.date}</p>
                                ) : null}
                            </div>

                            {note.description ? (
                                <p className="max-w-xl text-muted-foreground text-sm leading-6">{note.description}</p>
                            ) : null}

                            {note.tags.length > 0 ? (
                                <p className="font-mono text-[11px] text-muted-foreground/70">
                                    {note.tags.slice(0, 5).join(" / ")}
                                </p>
                            ) : null}
                        </article>
                    ))
                ) : (
                    <p className="border-border border-b py-8 text-muted-foreground text-sm">
                        Notes will show up here once they are added.
                    </p>
                )}
            </div>
        </section>
    );
}
