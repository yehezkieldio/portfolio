import { AmbientBackdrop } from "#/components/ambient-backdrop";
import { SiteFrame } from "#/components/site-frame";
import { ContactStrip } from "#/features/home/components/contact-strip";
import { FeaturedWork } from "#/features/home/components/featured-work";
import { IdentityHeader } from "#/features/home/components/identity-header";
import { TechOverview } from "#/features/home/components/tech-overview";

export default function Home() {
    return (
        <div className="relative isolate min-h-screen bg-background text-foreground">
            <AmbientBackdrop />
            <main className="relative z-10">
                <SiteFrame variant="home">
                    <IdentityHeader />
                    <FeaturedWork />
                    <TechOverview />
                    <ContactStrip />
                </SiteFrame>
            </main>
        </div>
    );
}
