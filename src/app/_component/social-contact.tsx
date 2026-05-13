import { GitHubDark, LinkedIn, XDark } from "@ridemountainpig/svgl-react";
import type { ComponentType, SVGProps } from "react";

export type PageSocialLink = {
    href: string;
    label: string;
};

type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

type PageSocialContactProps = {
    delayIndex?: number;
    email: string;
    links: PageSocialLink[];
};

export function PageSocialContact({ delayIndex = 0, email, links }: PageSocialContactProps) {
    return (
        <section
            className="project-row-enter max-w-xl space-y-2 text-[15px] text-muted-foreground leading-6 tracking-normal sm:space-y-2.5 sm:text-base"
            style={{ animationDelay: `${delayIndex * 85}ms` }}
        >
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                <span>Find me on</span>
                {links.map((link) => (
                    <a
                        className="group motion-link motion-social-link inline-flex items-center gap-1.5 border-b px-1 text-foreground/88"
                        href={link.href}
                        key={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <PageSocialIcon link={link} />
                        <span>{link.label}</span>
                    </a>
                ))}
            </p>
            <p>
                <span>or mail me at </span>
                <a className="font-mono text-muted-foreground" href={`mailto:${email}`}>
                    {email}
                </a>
            </p>
        </section>
    );
}

function PageSocialIcon({ link }: { link: PageSocialLink }) {
    const Icon = getSocialIcon(link);

    if (!Icon) {
        return null;
    }

    return (
        <Icon
            aria-hidden="true"
            className="size-3.5 opacity-80 brightness-0 grayscale invert transition-opacity duration-200 ease-(--ease-ui) group-hover:opacity-100"
        />
    );
}

function getSocialIcon({ href, label }: PageSocialLink): SocialIcon | null {
    const normalizedLabel = label.toLowerCase();
    const hostname = getHostname(href);

    if (normalizedLabel === "github" || hostname === "github.com") {
        return GitHubDark;
    }

    if (normalizedLabel === "linkedin" || hostname === "linkedin.com" || hostname === "www.linkedin.com") {
        return LinkedIn;
    }

    if (
        normalizedLabel === "x" ||
        normalizedLabel === "twitter" ||
        hostname === "x.com" ||
        hostname === "twitter.com"
    ) {
        return XDark;
    }

    return null;
}

function getHostname(href: string) {
    try {
        return new URL(href).hostname.toLowerCase();
    } catch {
        return "";
    }
}
