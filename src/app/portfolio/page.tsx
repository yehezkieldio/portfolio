import { AmbientBackdrop } from "#/components/ambient-backdrop";
import { SiteFrame } from "#/components/site-frame";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <AmbientBackdrop />
            <main>
                <SiteFrame>
                    <h1>Hello, world!</h1>
                </SiteFrame>
            </main>
        </div>
    );
}
