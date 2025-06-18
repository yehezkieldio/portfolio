import { ProjectList } from "#/components/project-list";

export default function Home() {
    return (
        <div className="flex min-h-screen justify-center pt-4 md:pt-14 md:pb-14">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="font-display text-xl font-semibold md:text-2xl">Yehezkiel Dio Sinolungan</h1>
                    <p className="font-display text-foreground/85 text-sm md:text-base">
                        Software Engineer. Web Developer. Open Source Enthusiast.
                    </p>
                </div>
                <ProjectList itemsPerPage={6} />
            </div>
        </div>
    );
}
