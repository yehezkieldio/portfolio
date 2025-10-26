import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Navigation } from "#/components/navigation";
import { Button } from "#/components/ui/button";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-24 md:px-8 md:pt-48 md:pb-32">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-accent/5 via-background to-background" />
                <div className="pointer-events-none absolute top-32 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

                <div className="container relative mx-auto max-w-4xl">
                    <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        <div className="space-y-4 sm:space-y-6">
                            <h1 className="text-pretty font-normal font-serif text-4xl leading-[1.05] tracking-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                Yehezkiel Dio Sinolungan
                            </h1>
                            <div className="h-px w-24 bg-linear-to-r from-accent to-transparent sm:w-44" />
                        </div>

                        <p className="max-w-2xl font-light font-sans text-lg text-muted-foreground leading-relaxed sm:text-xl md:text-2xl">
                            Software Engineer & Full-stack Developer
                        </p>

                        <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row sm:items-center sm:gap-6 sm:pt-8">
                            <Button
                                asChild
                                className="group w-full gap-2 transition-all duration-300 hover:gap-3 sm:w-auto"
                                size="lg"
                            >
                                <Link href="/projects">
                                    <span>Explore Work</span>
                                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className="w-full transition-colors duration-300 hover:bg-muted/50 sm:w-auto"
                                size="lg"
                                variant="ghost"
                            >
                                <Link href="#contact">Download CV</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted/30 px-4 py-12 sm:px-6 sm:py-16 md:py-20" id="about">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
                        <div className="space-y-4 sm:space-y-6">
                            <h2 className="font-normal font-serif text-2xl tracking-normal sm:text-3xl md:text-4xl">
                                About Me
                            </h2>
                            <div className="space-y-3 font-sans text-muted-foreground text-sm leading-relaxed sm:space-y-4 sm:text-base">
                                <p>
                                    I'm a full-stack web developer passionate about creating digital
                                    experiences that are not only functional but also accessible and
                                    delightful to use. My approach combines technical precision with
                                    thoughtful design principles.
                                </p>
                                <p>
                                    With expertise spanning the entire development stack—from crafting
                                    responsive front-end interfaces to architecting robust back-end systems
                                    and implementing DevOps workflows—I bring a holistic perspective to every
                                    project.
                                </p>
                                <p>
                                    I believe in continuous learning and growth, always exploring new
                                    technologies and methodologies to deliver better solutions. My goal is to
                                    build web applications that make a meaningful impact.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-3 sm:space-y-4">
                                <h3 className="font-normal font-serif text-lg sm:text-xl">Expertise</h3>
                                <div className="space-y-3 font-sans text-sm sm:text-base">
                                    <div className="space-y-1">
                                        <p className="font-medium">Front-end Development</p>
                                        <p className="text-muted-foreground text-sm">
                                            React, Next.js, TypeScript, Tailwind CSS
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-medium">Back-end Development</p>
                                        <p className="text-muted-foreground text-sm">
                                            Node.js, API Design, Database Architecture
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-medium">DevOps & Tools</p>
                                        <p className="text-muted-foreground text-sm">
                                            CI/CD, Cloud Deployment, Version Control
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                            <h2 className="font-normal font-serif text-2xl tracking-normal sm:text-3xl md:text-4xl">
                                Selected Work
                            </h2>
                            <Button asChild className="gap-2 self-start sm:self-auto" variant="ghost">
                                <Link href="/projects">
                                    View All Projects
                                    <ArrowRightIcon className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                            {[1, 2].map((i) => (
                                <Link className="group block space-y-4" href="/projects" key={i}>
                                    <div className="aspect-4/3 overflow-hidden rounded-lg border border-border/50 bg-muted">
                                        <div className="h-full w-full bg-linear-to-br from-muted to-accent/5 transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-normal font-serif text-lg transition-colors group-hover:text-accent sm:text-xl">
                                            Project Title {i}
                                        </h3>
                                        <p className="font-sans text-muted-foreground text-sm">
                                            A brief description of the project and the technologies used to
                                            build it.
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
