import { AmbientBackdrop } from "#/components/ambient-backdrop";

export default function Home() {
    return (
        <div className="relative isolate min-h-screen bg-background text-foreground">
            <AmbientBackdrop />
        </div>
    );
}
