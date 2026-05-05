import { WritingNav } from "./_component/writing-nav";

export default function WritingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <WritingNav />
            {children}
        </>
    );
}
