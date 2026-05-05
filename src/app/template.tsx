import { SiteLayout } from "./_component/site-layout";

export default function Template({ children }: { children: React.ReactNode }) {
    return <SiteLayout>{children}</SiteLayout>;
}
