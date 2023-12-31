import Image from "next/image";
import { MainNavigation } from "../components/main-navigation";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";
import { cn } from "../lib/utils";
import { MainNavigationItem } from "../components/navigation-items";

const navigationItems = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Portfolio",
        href: "/portfolio",
    },
];

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container bg-background">
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
                            href="/contact"
                            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "px-4")}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-32 lg:pt-24">
                    <div className="container flex max-w-[64rem] flex-col gap-4 text-center">
                        <h1 className="text-4xl font-semibold md:text-6xl lg:text-8xl">Software Developer</h1>
                        <div className="flex max-w-[44rem] flex-col lg:flex-row items-start mt-4 ml-auto text-center lg:text-left">
                            <h2 className="text-sm font-medium mr-24 whitespace-nowrap">Yehezkiel Dio Sinolungan</h2>
                            <div className="flex flex-col">
                                <p className="text-xs mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas similique dolore
                                    sunt praesentium odit assumenda autem sint nostrum consequatur! Et, laudantium.
                                    Similique repellendus error corporis perferendis sunt, dignissimos perspiciatis
                                    corrupti maxime debitis, ipsum sint tenetur pariatur doloribus placeat odio est?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <Image
                            src="/header-background-image.jpg"
                            alt="pic"
                            width={700}
                            height={475}
                            sizes="100vw"
                            className="rounded-sm"
                            style={{
                                width: "100%",
                                height: "500px",
                            }}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
