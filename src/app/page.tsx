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
        <div className="flex min-h-screen justify-center pt-4 md:px-24 md:pt-14 md:pb-14">
            <div className="flex flex-col gap-8">
                <div id="main-section" className="flex flex-col items-center gap-2 text-center">
                    <h1 className="font-display text-xl font-semibold md:text-2xl">Yehezkiel Dio Sinolungan</h1>
                    <p className="font-display text-foreground/85 text-sm md:text-base">
                        Software Engineer. Web Developer. Open Source Enthusiast.
                    </p>
                    <div>
                        {socialLinks.map((social: SocialLink, index: number) => (
                            <Fragment key={social.href}>
                                <Link
                                    href={social.href}
                                    className="text-foreground hover:text-foreground/90 font-display mx-2 underline"
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
