import { ProjectList } from "#/components/project-list";
import { socials } from "#/lib/socials";
import Link from "next/link";
import { Fragment, Suspense } from "react";

interface SocialLink {
    name: string;
    href: string;
}

const socialLinks: SocialLink[] = [
    { name: "GitHub", href: socials.github },
    { name: "X", href: socials.x },
    { name: "Instagram", href: socials.instagram },
    { name: "LinkedIn", href: socials.linkedin }
];

export default function Home() {
    return (
        <div className="flex min-h-screen justify-center pt-12 pb-12 md:px-24 md:pt-14 md:pb-14">
            <div className="flex flex-col gap-8">
                <div id="main-section" className="flex flex-col items-center gap-2 text-center">
                    <h1 className="font-display text-[clamp(1.25rem,4vw,1.5rem)] font-semibold">
                        Yehezkiel Dio Sinolungan
                    </h1>
                    <p className="font-display text-foreground/85 px-0.5 text-[clamp(0.875rem,3vw,1rem)]">
                        Software Engineer. Web Developer. Open Source Enthusiast.
                    </p>
                    <div>
                        {socialLinks.map((social: SocialLink, index: number) => (
                            <Fragment key={social.href}>
                                <Link
                                    href={social.href}
                                    className="text-foreground hover:text-foreground/90 font-display mx-2 text-[clamp(0.875rem,2.5vw,1rem)] underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.name}
                                </Link>
                                {index < socialLinks.length - 1 && <span className="text-muted-foreground/60">•</span>}
                            </Fragment>
                        ))}
                    </div>
                </div>
                <Suspense>
                    <ProjectList itemsPerPage={9} />
                </Suspense>
            </div>
        </div>
    );
}
