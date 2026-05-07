import { PageHeader, PageIntro, PageSection } from "./_component/content-primitives";
import type { PageSocialLink } from "./_component/social-contact";
import { PageSocialContact } from "./_component/social-contact";

const heading = {
    description: "Software Engineer",
    title: "Yehezkiel Dio Sinolungan",
};

const intro = [
    "Generalist software engineer based in Indonesia, focused on building reliable, performant, and accessible digital experiences. I mostly work in web development, where I enjoy building software that feels stable and resilient.",
    "My work mainly involves full-stack development and release engineering. I am interested in how software is designed, built, shipped, and maintained across different parts of the stack.",
    "I also explore systems programming and developer tools. I care about resiliency, thoughtful architecture, and building practical software that can be maintained over time.",
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
