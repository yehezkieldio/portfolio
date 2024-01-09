"use client";

import React, { useState } from "react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "@/components/ui/separator";

const AccordionItem = ({
    title,
    content,
    isOpen,
    onToggle,
}: {
    title: string;
    content: {
        description: string;
    };
    isOpen: boolean;
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
            {isOpen && <div className="mt-12">{content.description}</div>}
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
                description: "n/a",
            },
            image: "n/a",
        },
        {
            title: "Visual Design",
            content: {
                description: "n/a",
            },
            image: "n/a",
        },
        {
            title: "Development",
            content: {
                description: "n/a",
            },
            image: "n/a",
        },
    ];

    return (
        <div>
            {accordionData.map((item, index) => (
                <>
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
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
