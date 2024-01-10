import Image from "next/image";
import { MainNavigation } from "../components/main-navigation";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";
import { cn } from "../lib/utils";
import { MainNavigationItem } from "../components/navigation-items";
import Accordion from "../components/accordion";

const navigationItems = [
    {
        title: "About",
        href: "#about-me",
    },
    {
        title: "Services",
        href: "#services",
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
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[500px] rounded-sm"
                        />
                    </div>
                    <div className="container pt-24 pb-16 flex flex-row gap-4 text-left" id="about-me">
                        <div>
                            <div className="flex flex-row gap-2 align-middle justify-center items-center">
                                <div className="p-3 border border-white rounded-xl gap-2 inline-flex items-center">
                                    <span className="flickering-span inline-block rounded-full w-3 h-3"></span>
                                    <p className=" whitespace-nowrap">About me</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-36 w-full">
                            <h3 className="text-2xl font-semibold md:text-4xl lg:text-6xl">Lorem ipsum dolor sit.</h3>
                            <div className="flex flex-row mt-12">
                                <p className="text-sm font-medium mr-32">Lorem ipsum dolor sit amet consectetur.</p>
                                <div>
                                    <p className="text-xs max-w-[44rem]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est,
                                        officia at eos non ex exercitationem magnam doloremque in alias aliquid laborum
                                        sunt explicabo, cumque a dolor debitis, quia magni possimus excepturi nemo
                                        accusantium maxime saepe? Corporis odit vitae, distinctio asperiores porro quae
                                        ullam.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className={cn(
                                            buttonVariants({ variant: "secondary", size: "sm" }),
                                            "px-4 mt-8"
                                        )}
                                    >
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container flex flex-row w-full max-w-screen mx-auto gap-4 pb-24">
                        <Image
                            src="/avatar-one.jpg"
                            alt="pic"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="flex-1 h-[500px] rounded-sm max-w-full"
                        />
                        <Image
                            src="/avatar-two.jpg"
                            alt="pic"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="flex-1 h-[500px] rounded-sm max-w-full"
                        />
                        <Image
                            src="/avatar-three.jpg"
                            alt="pic"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="flex-1 h-[500px] rounded-sm max-w-full"
                        />
                    </div>
                    <div className="container pt-24 pb-16 flex flex-row gap-4 text-left" id="services">
                        <div>
                            <div className="flex flex-row gap-2 align-middle justify-center items-center">
                                <div className="p-3 border border-white rounded-xl gap-2 inline-flex items-center">
                                    <span className="flickering-span inline-block rounded-full w-3 h-3"></span>
                                    <p className=" whitespace-nowrap">Expertise</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-36 w-full">
                            <h3 className="text-2xl font-semibold md:text-4xl lg:text-6xl">Lorem ipsum dolor sit.</h3>
                            <div className="mt-24">
                                <div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-24 pb-16 flex flex-col gap-4 text-left">
                        <div>
                            <div className="flex flex-row gap-2 align-middle items-center">
                                <div className="p-3 border border-white rounded-xl gap-2 inline-flex items-center">
                                    <span className="flickering-span inline-block rounded-full w-3 h-3"></span>
                                    <p className=" whitespace-nowrap">Projects</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-10 text-2xl font-semibold md:text-4xl lg:text-6xl">My latest projects</h3>
                            <div className="flex flex-row gap-4 mt-12">
                                <div>
                                    <div className="relative group">
                                        <Image
                                            src="/avatar-one.jpg"
                                            alt="pic"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-auto rounded-sm transition-all duration-300 transform group-hover:brightness-50"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href="/contact"
                                                className={cn(
                                                    buttonVariants({ variant: "secondary", size: "sm" }),
                                                    "px-4 mt-8"
                                                )}
                                            >
                                                Visit project
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h1 className="text-3xl font-semibold">Lorem.</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative group">
                                        <Image
                                            src="/avatar-one.jpg"
                                            alt="pic"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-auto rounded-sm transition-all duration-300 transform group-hover:brightness-50"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href="/contact"
                                                className={cn(
                                                    buttonVariants({ variant: "secondary", size: "sm" }),
                                                    "px-4 mt-8"
                                                )}
                                            >
                                                Visit project
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h1 className="text-3xl font-semibold">Lorem.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
