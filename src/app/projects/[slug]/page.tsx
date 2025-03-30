// app/projects/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 模擬你的專案資料（實際應用中可以從 API 或資料庫獲取）
const projects = [
    { id: 1, title: "Nuxt 3 + Express Login Template", image: "https://imgur.com/BYfbQQI.png", slug: "nuxt-express-login", description: "這是一個基於 Nuxt 3 和 Express 的登入模板。" },
    { id: 2, title: "Project 2", image: "https://imgur.com/BYfbQQI.png", slug: "project-2", description: "這是第二個專案的描述。" },
    { id: 3, title: "Project 3", image: "https://imgur.com/BYfbQQI.png", slug: "project-3", description: "這是第三個專案的描述。" },
    { id: 4, title: "Project 4", image: "https://imgur.com/BYfbQQI.png", slug: "project-4", description: "這是第四個專案的描述。" },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // 根據 slug 查找對應專案
    const project = projects.find((p) => p.slug === slug);

    // 如果找不到專案，返回 404
    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <Image 
                src={project.image} 
                alt={project.title} 
                width={665}
                height={300}
                className="w-full max-w-lg rounded-xl mb-4" 
            />
            <p className="text-lg">{project.description}</p>
            <Link href="/projects" className="text-blue-500 hover:underline mt-4 inline-block">
                返回專案列表
            </Link>
        </div>
    );
}

// 可選：生成靜態參數（如果需要靜態生成頁面）
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}