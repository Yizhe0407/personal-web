import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { House, UserRound, BriefcaseBusiness, Layers, Mail, Instagram, Github, Linkedin } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';


const navList = [
    { icon: House, title: 'Home', url: "#", id: 'home' },
    { icon: UserRound, title: 'About', url: "#", id: 'about' },
    { icon: BriefcaseBusiness, title: 'Project', url: "#", id: 'project' },
    { icon: Layers, title: 'Stack', url: "#", id: 'stack' },
    { icon: Mail, title: 'Contact', url: "#", id: 'contact' }
] as const;

const social = [
    { icon: Github, label: 'Github', url: "#" },
    { icon: Instagram, label: 'Instagram', url: "#" },
    { icon: Linkedin, label: 'LinkedIn', url: "#" },
]

export default function t() {
    return (
        <div className='flex justify-between bg-white w-full h-[96px] rounded-2xl shadow-sm p-[24px]'>
            <div className="flex items-center gap-4 w-full">
                <Avatar className="w-[48px] h-[48px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-gray-800">Liao Yizhe</h2>
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <button className="">
                        <Menu className="w-6 h-6 text-gray-800" />
                    </button>
                </SheetTrigger>

                {/* 側邊欄內容 */}
                <SheetContent side="top" className="flex justify-center m-8 p-6 bg-white rounded-b-2xl">
                    <div className="flex flex-col">
                        {/* 頭像與名稱 */}
                        <div className="flex items-center gap-4 mb-6">
                            <Avatar className="w-[40px] h-[40px]">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Liao Yizhe</h2>
                                <p className="text-sm text-gray-500">Creative Designer</p>
                            </div>
                        </div>

                        {/* 導航菜單 */}
                        <nav className="flex flex-col gap-2 mb-6">
                            {navList.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="text-base">{item.title}</span>
                                </a>
                            ))}
                        </nav>

                        {/* 社交媒體連結 */}
                        <div className="flex flex-col gap-2">
                            {social.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.url}
                                    className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="text-base">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}
