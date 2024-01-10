import Image from "next/image";
import { MainNavigation } from "../../components/main-navigation";
import { buttonVariants } from "../../components/ui/button";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { MainNavigationItem } from "../../components/navigation-items";
import SearchProjects from "../../components/search";
import { Meteors } from "../../components/meteor";

const projectsItems = [
    {
        title: "Project 1",
        description: "This is a project",
        image: "/images/placeholder.png",
    },
];

const navigationItems = [
    {
        title: "About",
        href: "/#about-me",
    },
    {
        title: "Services",
        href: "/#services",
    },
    {
        title: "Portfolio",
        href: "/portfolio",
    },
];

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col ">
            <header className="container bg-background bg-gradient-to-b from-slate-950 to to-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNavigation items={navigationItems} />
                    {navigationItems?.length ? (
                        <nav className="hidden gap-6 md:flex">
                            {navigationItems?.map((item, index) => (
                                <MainNavigationItem
                                    key={index}
                                    item={item}
                                    isLast={index === navigationItems.length - 1}
                                />
                            ))}
                        </nav>
                    ) : null}
                    <nav>
                        <Link
                            href="/#contact"
                            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "px-4")}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1 bg-background ">
                <section className="space-y-6 pt-6 md:pt-10 lg:pt-24 bg-gradient-to-l from-slate-950">
                    <div className="container flex max-w-[64rem] flex-col gap-4 text-center">
                        <h1 className="text-4xl font-semibold md:text-6xl lg:text-8xl">Portfolio</h1>
                    </div>
                    <div className="mt-24 pt-24  bg-gradient-to-l from-zinc-950">
                        <div className="flex justify-center items-center">
                            <SearchProjects projects={projectsItems} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
