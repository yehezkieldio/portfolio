import { AmbientBackdrop } from "#/components/ambient-backdrop";
import { SiteFrame } from "#/components/site-frame";
import { IdentityHeader } from "#/features/components/identity-header";

export default function Home() {
    return (
        <div className="relative isolate min-h-screen bg-background text-foreground">
            <AmbientBackdrop />
            <main className="relative z-10">
                <SiteFrame variant="home">
                    <IdentityHeader />
                </SiteFrame>
            </main>
        </div>
    );
}
