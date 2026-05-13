import { PageHeader, PageIntro, PageSection } from "./_component/content-primitives";
import type { PageSocialLink } from "./_component/social-contact";
import { PageSocialContact } from "./_component/social-contact";

const heading = {
    description: "Software Engineer",
    title: "Yehezkiel Dio Sinolungan",
};

const intro = [
    "Generalist software engineer based in Indonesia, focused on building accessible and high-performance digital systems. I primarily work across the web stack, with an emphasis on reliability, resiliency, and system design.",
    "My work primarily revolves around full-stack development, infrastructure, and release engineering, with a strong interest in operational design and reliability in production environments.",
    "I also explore systems programming and developer tooling, particularly in areas related to developer experience, automation, and low-level system behavior.",
];

const contact = {
    email: "yehezkieldio@proton.me",
    links: [
        {
            href: "https://github.com/yehezkieldio",
            label: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/yehezkieldio",
            label: "LinkedIn",
        },
        {
            href: "https://x.com/yehezkieldio",
            label: "X",
        },
    ] satisfies PageSocialLink[],
};

export default function Home() {
    return (
        <PageSection>
            <PageHeader description={heading.description} title={heading.title} />
            <PageIntro paragraphs={intro} />
            <PageSocialContact delayIndex={intro.length + 1} email={contact.email} links={contact.links} />
        </PageSection>
    );
}
