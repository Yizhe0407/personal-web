import Stack from "@/components/Stack";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold">Lizo Yizhe</h1>
        <p className="text-gray-500 font-bold">Web Developer and Student</p>
      </div>

      <p className="text-gray-500 font-bold">
        目前就讀於雲林科技大學資訊工程學系。對於網站開發有興趣，正在學習前端技術與後端技術。
      </p>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
        <ProjectCard isProjectPage={false} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Stack</h2>
        <Stack isStack={false} />
      </section>

      
    </div>
  );
}