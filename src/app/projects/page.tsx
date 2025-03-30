import React from 'react'
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full h-full pt-32 pb-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
      <ProjectCard isProjectPage={true} />
    </div>
  )
}
