"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useActiveItem } from "@/lib/Context";
import { Button } from "@/components/ui/button";

export default function Stack({ isStack }: { isStack: boolean }) {
    const { setActiveItem } = useActiveItem();
    const skill = [
        { id: 1, title: "Next.js", image: "https://img.icons8.com/color/48/000000/nextjs.png" },
        { id: 2, title: "Node.js", image: "https://img.icons8.com/color/48/000000/nodejs.png" },
        { id: 3, title: "Express", image: "https://img.icons8.com/color/48/000000/express.png" },
        { id: 4, title: "React", image: "https://img.icons8.com/color/48/000000/react-native.png" },
        { id: 5, title: "Tailwind CSS", image: "https://img.icons8.com/color/48/000000/tailwindcss.png" },
    ];

    return (
        <div className="w-full bg-white shadow-md rounded-xl flex flex-col">
            <div className="w-full p-6 grid grid-cols-3 justify-items-start gap-2 sm:gap-4 md:gap-6">
                {skill.map((item) => (
                    <div
                        key={item.id}
                        className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-4"
                    >
                        <div className="p-3 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-center items-center">
                            <Image width={48} height={48} src={item.image} alt={item.title} className="w-10 h-10" />
                        </div>
                        <h3 className="hidden md:block text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                ))}
            </div>
            {!isStack && (
                <div className="py-2 px-4 flex justify-end">
                    <Link href="/stack">
                        <Button
                            variant="ghost"
                            className="group flex items-center font-bold cursor-pointer"
                            onClick={() => setActiveItem("stack")}
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-2">
                                View Full Stack
                            </span>
                            <ArrowRight className="hidden group-hover:block arrow-animation" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
