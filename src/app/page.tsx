import Image from "next/image";
import { MainNavigation } from "../components/main-navigation";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";
import { cn } from "../lib/utils";
import { MainNavigationItem } from "../components/navigation-items";
import Accordion from "../components/accordion";
import { Testimonies } from "../components/testimonies";
import { Spotlight } from "../components/spotlight";

const testimoniesItem: { quote: string; name: string; title: string }[] = [
    {
        quote: "A very professional programmer.",
        name: "Raihan Pratama Putra",
        title: "Universitas Mulia, Indonesia",
    },
    {
        quote: "Frontend expert of Balikpapan.",
        name: "Rizky Irswanda",
        title: "ITK, Indonesia",
    },
    {
        quote: "A talented individual with a lot of potential, he's going places.",
        name: "Hireaki",
        title: "Philippines",
    },
    {
        quote: "A proficient programmer.",
        name: "RavenXyzer",
        title: "Fainéant Utopia, Discord",
    },
    {
        quote: "He is very good.",
        name: "Terry Tang",
        title: "Universitas Mulia, Indonesia",
    },
    {
        quote: "Great teacher.",
        name: "Muhammad Adam",
        title: "Universitas Mulia, Indonesia",
    },
    {
        quote: "Professional lecturer.",
        name: "Dimas Prayudha",
        title: "Universitas Mulia, Indonesia",
    },
];

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
                            href="#contact"
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
                        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                        <h1 className="text-4xl font-semibold md:text-6xl lg:text-8xl">Software Developer</h1>
                        <div className="flex max-w-[44rem] flex-col lg:flex-row items-start mt-4 ml-auto text-center lg:text-left">
                            <h2 className="text-sm font-medium mr-24 whitespace-nowrap">Yehezkiel Dio Sinolungan</h2>
                            <div className="flex flex-col">
                                <p className="text-sm mb-6">
                                    A software developer with a passion for building digital experiences that are
                                    accessible and delightful with a focus on performance and user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-8">
                        <Image
                            src="/header-background-image.jpg"
                            alt="pic"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[500px] rounded-sm"
                        />
                    </div>
                    <div
                        className="container pt-24 pb-16 flex flex-row gap-4 text-left bg-gradient-to-l from-zinc-950"
                        id="about-me"
                    >
                        <div>
                            <div className="flex flex-row gap-2 align-middle justify-center items-center">
                                <div className="p-3 border border-white rounded-xl gap-2 inline-flex items-center">
                                    <span className="flickering-span inline-block rounded-full w-3 h-3"></span>
                                    <p className=" whitespace-nowrap">About me</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-36 w-full">
                            <h3 className="text-2xl font-semibold md:text-4xl lg:text-6xl">Full-stack Web Developer</h3>
                            <div className="flex flex-row mt-12">
                                <p className="text-sm font-medium mr-32">Based in Indonesia</p>
                                <div>
                                    <p className="text-sm max-w-[40rem]">
                                        Hello, and greetings! I am Yehezkiel Dio Sinolungan or Dio for short. I&apos;m a
                                        software developer with a passion for building things, particularly websites and
                                        web applications, but I&apos;m also quite interested in software architecture,
                                        design, and infrastructure. I&apos;m also a big fan of open-source software and
                                        have contributed to a few projects here and there.
                                    </p>
                                    <p className="mt-4 text-sm max-w-[40rem]">
                                        Currently, I&apos;m a Informatics undergraduate student at Universitas Mulia,
                                        Balikpapan, Indonesia, while also working as a freelance web developer. I&apos;m
                                        also open for work opportunities and collaborations, so feel free to reach out
                                        to me if you&apos;re interested!
                                    </p>
                                    <Link
                                        href="#contact"
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

                    <div className="container flex flex-row w-full max-w-screen mx-auto gap-4 pb-8 bg-gradient-to-r from-slate-950">
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
                    <div className="container antialiased items-center justify-center relative overflow-hidden pt-12 pb-24">
                        <h3 className="text-center text-2xl leading-8 font-semibold md:text-4xl lg:text-6xl pb-16">
                            What people say about me
                        </h3>
                        <Testimonies speed="slow" direction="left" pauseOnHover items={testimoniesItem} />
                    </div>
                    <div
                        className="container pt-24 pb-16 flex flex-row gap-4 text-left bg-gradient-to-r from-slate-950"
                        id="services"
                    >
                        <div>
                            <div className="flex flex-row gap-2 align-middle justify-center items-center">
                                <div className="p-3 border border-white rounded-xl gap-2 inline-flex items-center">
                                    <span className="flickering-span inline-block rounded-full w-3 h-3"></span>
                                    <p className=" whitespace-nowrap">Expertise</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-36 w-full">
                            <h3 className="text-2xl leading-8 font-semibold md:text-4xl lg:text-6xl">
                                I build things for the web and beyond
                            </h3>
                            <div className="mt-24">
                                <div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-24 pb-16 flex flex-col gap-4 text-left bg-gradient-to-l from-slate-950">
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
                                            src="/lokasi-zero.png"
                                            alt="pic"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-[450px] rounded-sm transition-all duration-300 transform group-hover:brightness-50"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href="https://yehezkieldio.github.io/lokasi-zero/"
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
                                        <h1 className="text-3xl font-semibold">LokasiZero</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative group">
                                        <Image
                                            src="/project-navia.png"
                                            alt="pic"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-[450px] rounded-sm transition-all duration-300 transform group-hover:brightness-50"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href="https://github.com/elizielx/navia"
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
                                        <h1 className="text-3xl font-semibold">Navia</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container mt-24 pt-8 pb-16 text-left bg-slate-900 flex flex-col gap-2 bg-gradient-to-b from-slate-900"
                        id="contact"
                    >
                        <div className="mb-4">
                            <h3 className="text-center font-semibold text-[10rem]">Get In Touch</h3>
                        </div>
                        <div className="flex flex-row gap-4 justify-between">
                            <div className="w-1/2">
                                <h4 className="font-medium">Let&apos;s build something together.</h4>
                                <p className="text-sm">
                                    I&apos;m currently available for freelance work. If you have a project that you want
                                    to get started, think you need my help with something, or just fancy saying hey,
                                    then get in touch.
                                </p>
                            </div>
                            <div>
                                <h5 className="font-medium text-muted-foreground">Sosials</h5>
                                <p className="text-sm">
                                    <span className="flex flex-col">
                                        <Link
                                            href="https://www.linkedin.com/in/yehezkieldio"
                                            className="hover:underline"
                                        >
                                            LinkedIn
                                        </Link>
                                        <Link href="https://www.instagram.com/yhezkiel.dio" className="hover:underline">
                                            Instagram
                                        </Link>
                                        <Link href="https://github.com/yehezkieldio/" className="hover:underline">
                                            GitHub
                                        </Link>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h5 className="font-medium text-muted-foreground">Email</h5>
                                <p className="text-sm">
                                    <Link href="mailto:yehezkieldio@proton.me" className="hover:underline">
                                        yehezkieldio@proton.me
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
