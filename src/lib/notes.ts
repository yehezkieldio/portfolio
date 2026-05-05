import { notes as noteDocs } from "fumadocs-mdx:collections/server";

const MDX_EXTENSION_REGEX = /\.mdx?$/;

function noteSlug(path: string) {
    return path.replace(MDX_EXTENSION_REGEX, "");
}

function normalizeTag(tag: string) {
    return tag.trim().toLowerCase().replace(/\s+/g, "-");
}

function withNoteRuntimeFields(note: (typeof noteDocs)[number]) {
    return {
        ...note,
        date: note.date ?? "",
        slug: noteSlug(note.info.path),
        tags: note.tags.map(normalizeTag),
    };
}

type Note = ReturnType<typeof withNoteRuntimeFields>;

function sortNotes(a: Note, b: Note) {
    return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
}

const notes = noteDocs.map(withNoteRuntimeFields).sort(sortNotes);
const notesBySlug = new Map(notes.map((note) => [note.slug, note]));

export function getNotes() {
    return notes;
}

export function getNote(slug: string) {
    return notesBySlug.get(slug);
}
