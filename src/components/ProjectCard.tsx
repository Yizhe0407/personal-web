"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useActiveItem } from "@/lib/Context"; // 假設你的 Context 在 @/lib/Context
import { Button } from "@/components/ui/button";

export default function ProjectCard({ isProjectPage }: { isProjectPage: boolean }) {
    const { setActiveItem } = useActiveItem();
    const projects = [
        { id: 1, title: "Nuxt 3 + Express Login Template", image: "https://imgur.com/BYfbQQI.png" },
        { id: 2, title: "Project 2", image: "https://imgur.com/BYfbQQI.png" },
        { id: 3, title: "Project 3", image: "https://imgur.com/BYfbQQI.png" },
        { id: 4, title: "Project 4", image: "https://imgur.com/BYfbQQI.png" },
    ];
    const visibleProjects = isProjectPage ? projects : projects.slice(0, 2);

    return (
        <div className="w-full bg-white shadow-md rounded-xl flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                {visibleProjects.map((project) => (
                    <div key={project.id} className="w-full flex flex-col items-center mx-auto gap-4">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={665}
                            height={300}
                            className="rounded-xl"
                            style={{ objectFit: "contain" }}
                            priority={project.id <= 2 && !isProjectPage}
                        />
                        <h3 className="w-full text-lg font-bold text-left">{project.title}</h3>
                    </div>
                ))}
            </div>
            {!isProjectPage && (
                <div className="p-4 flex justify-end">
                    <Link href="/projects">
                        <Button
                            variant="ghost"
                            className="group flex items-center font-bold cursor-pointer"
                            onClick={() => setActiveItem("project")}
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-2">
                                View All Projects
                            </span>
                            <ArrowRight className="hidden group-hover:block arrow-animation" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
