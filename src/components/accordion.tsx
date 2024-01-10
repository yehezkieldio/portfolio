"use client";

import React, { useState } from "react";
import { cn, shimmer, toBase64 } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const AccordionItem = ({
    title,
    content,
    isOpen,
    image,
    onToggle,
}: {
    title: string;
    content: {
        title: string;
        description: string;
    };
    isOpen: boolean;
    image: string;
    onToggle: () => void;
}) => {
    return (
        <div>
            <div className="flex flex-row align-middle items-center justify-between mt-8">
                <h4 className="inline-block">{title}</h4>
                <button
                    className={cn(
                        buttonVariants({ variant: isOpen ? "secondary" : "outline", size: "sm" }),
                        "px-4 mt-8"
                    )}
                    onClick={onToggle}
                >
                    {isOpen ? "View less" : "View more"}
                </button>
            </div>
            {isOpen && (
                <div className="mt-12">
                    <>
                        <Image
                            src={image}
                            alt="pic"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[250px] lg:h-[450px] rounded-sm"
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 450))}`}
                        />
                        <div className="flex flex-col lg:flex-row mt-8">
                            <h4 className="w-full lg:w-1/2 font-bold text-xl">{content.title}</h4>
                            <p className="ml-0 mt-10 lg:mt-0 lg:ml-24 font-light text-sm">{content.description}</p>
                        </div>
                    </>
                </div>
            )}
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index: any) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const accordionData = [
        {
            title: "Brand Identity",
            content: {
                title: "Igniting brand recognition through identity.",
                description:
                    "Your brand is your voice, your face, your soul. I help you define it, refine it, and amplify it into an unforgettable impression that builds trust and loyalty.",
            },
            image: "/brand-identity.jpg",
        },
        {
            title: "Visual Design",
            content: {
                title: "Turning ideas into reality.",
                description:
                    "I weave magic with pixels, transforming raw ideas into captivating visuals that guide, inform, and inspire. From UI/UX to graphic design, I create experiences that are as beautiful as they are functional.",
            },
            image: "/visual-design.jpg",
        },
        {
            title: "Development",
            content: {
                title: "Transforming ideas into powerful digital experiences.",
                description:
                    "I write code that breathes life into your designs, building robust and scalable web experiences that not only look amazing but also perform flawlessly.",
            },
            image: "/development.jpg",
        },
    ];

    return (
        <div>
            {accordionData.map((item, index) => (
                <>
                    <AccordionItem
                        key={item.title}
                        title={item.title}
                        content={item.content}
                        image={item.image}
                        isOpen={index === openIndex}
                        onToggle={() => handleToggle(index)}
                    />
                    {index !== accordionData.length - 1 && <Separator className="mt-10" />}
                </>
            ))}
        </div>
    );
};

export default Accordion;
