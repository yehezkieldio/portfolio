import { PageHeader, PageSection } from "./_component/content-primitives";

const intro = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sunt delectus dignissimos asperiores illo? Sit culpa, totam dolores tempore voluptatem vitae error consequuntur fuga tenetur sunt non nulla.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit doloribus libero dignissimos voluptatibus quaerat optio, quas incidunt, repudiandae facere totam id, ab consequuntur et!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi aliquam doloremque, facilis id quidem rerum doloribus vitae reprehenderit voluptatum, ad debitis ducimus? Ratione consequatur, suscipit ea corporis distinctio cumque.",
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
