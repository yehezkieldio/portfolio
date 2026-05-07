import { PageHeader, PageSection } from "./_component/content-primitives";

const intro = [
    "Generalist software engineer based in Indonesia, focused on building reliable, performant, and accessible digital experiences. I mostly work in web development, where I enjoy building software that feels stable and resilient.",
    "My work mainly involves full-stack development and release engineering. I am interested in how software is designed, built, shipped, and maintained across different parts of the stack.",
    "I also explore systems programming and developer tools. I care about resiliency, thoughtful architecture, and building practical software that can be maintained over time.",
];

export default function Home() {
    return (
        <PageSection>
            <PageHeader description="Software Engineer" title="Yehezkiel Dio Sinolungan" />

            <div className="max-w-xl space-y-4 text-[16px] text-muted-foreground/90 leading-7">
                {intro.map((paragraph, index) => (
                    <p
                        className="project-row-enter"
                        key={paragraph}
                        style={{ animationDelay: `${(index + 1) * 45}ms` }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </PageSection>
    );
}
