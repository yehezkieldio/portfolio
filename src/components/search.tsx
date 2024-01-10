"use client";

import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";

interface Project {
    title: string;
    description: string;
    image: string;
}

interface SearchProjectsProps {
    projects: Project[];
}

const SearchProjects: React.FC<SearchProjectsProps> = ({ projects }) => {
    const projectList = [
        {
            title: "LokasiZero",
            description: "Submission for GDSC X HIMATIKA website competition. ",
            image: "/lokasi-zero.png",
            tags: ["open-source"],
            link: "https://yehezkieldio.github.io/lokasi-zero/",
        },
        {
            title: "ifb1a",
            description: "Proof-of-Concept website for IFB1A, class of 2023, Infomatics, Universitas Balikpapan.",
            image: "/ifb1a.png",
            tags: ["open-source"],
            link: "https://ifb1a.vercel.app/",
        },

        {
            title: "Administrare",
            description:
                "Web application that aims to facilitate the management of an organization's office inventory.",
            image: "/administrare.png",
            tags: ["open-source", "intern"],
            link: "https://github.com/astrantialabs/administrare",
        },
        {
            title: "Finance Recap",
            description:
                "Web application for the purpose of viewing an organization's Excel financial report on the web.",
            image: "/finance-recap.png",
            tags: ["open-source", "intern"],
            link: "https://github.com/astrantialabs/finance-recap",
        },
        {
            title: "AQUA Concept Website",
            description: "A single page website concept for AQUA, a bottled water brand in Indonesia.",
            image: "/aqua.png",
            tags: ["open-source"],
            link: "https://yehezkieldio.github.io/aqua-concept-website/",
        },
        {
            title: "API Center",
            description: "A suite of APIs for miscellaneous purposes, such as generating random data, and more.",
            image: "/api-center.png",
            tags: ["open-source"],
            link: "https://github.com/astrantialabs/api-center",
        },
        {
            title: "Pelaporan Pengaduan Masyarakat",
            description: "Catalog for public complaints, built for SMK studies.",
            image: "/pelaporan-pengaduan-masyarakat.png",
            tags: ["open-source"],
            link: "",
        },
        {
            title: "Pembayaran SPP",
            description: "Submission for SMK UKK, a web application for school tuition payment catalog.",
            image: "/pembayaran-spp.png",
            tags: ["open-source"],
            link: "",
        },
        {
            title: "Portfolio 2022",
            description: "Older iteration of my portfolio website.",
            image: "/2022-portfolio.png",
            tags: ["open-source"],
            link: "",
        },
    ];

    const [filteredList, setFilteredList] = useState(projectList);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event: any) => {
        const query = event.target.value;
        setSearchQuery(query);

        const searchList = projectList.filter((item) => {
            return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(searchList);
    };

    return (
        <div className="flex flex-col container">
            <div className="flex flex-row gap-4">
                <Input
                    placeholder="Search projects"
                    type="text"
                    name="search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="flex flex-wrap flex-row mt-12 gap-4 justify-evenly">
                {filteredList.map((item, index) => {
                    return (
                        <div className="max-w-[24rem] p-4 border-2 rounded-md" key={index}>
                            <div className="relative group">
                                <Image
                                    src={item.image}
                                    alt="pic"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-[450px] h-[250px] rounded-sm transition-all duration-300 transform group-hover:brightness-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.link ? (
                                        <Link
                                            href={item.link}
                                            target="_blank"
                                            className={cn(
                                                buttonVariants({ variant: "secondary", size: "sm" }),
                                                "px-4 mt-8"
                                            )}
                                        >
                                            Visit project
                                        </Link>
                                    ) : (
                                        <button
                                            disabled
                                            className={cn(
                                                buttonVariants({ variant: "secondary", size: "sm" }),
                                                "px-4 mt-8"
                                            )}
                                        >
                                            No link available
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div></div>
                            <h1 className="mt-4 text-lg font-semibold">{item.title}</h1>
                            <p className="text-sm font-light">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchProjects;
