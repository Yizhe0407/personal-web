"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { House, UserRound, BriefcaseBusiness, Layers, Menu, X, Mail, Instagram, Github, Linkedin } from 'lucide-react';

const navList = [
    { icon: House, title: 'Home', url: "#", id: 'home' },
    { icon: UserRound, title: 'About', url: "#", id: 'about' },
    { icon: BriefcaseBusiness, title: 'Project', url: "#", id: 'project' },
    { icon: Layers, title: 'Stack', url: "#", id: 'stack' },
    { icon: Mail, title: 'Contact', url: "#", id: 'contact' }
] as const;

const social = [
    { icon: Github, label: 'Github', url: "https://github.com/Yizhe0407" },
    { icon: Instagram, label: 'Instagram', url: "https://www.instagram.com/roger_0407/" },
    { icon: Linkedin, label: 'LinkedIn', url: "https://www.linkedin.com/in/yizhe-liao/" },
]

export default function TopBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState('home')

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex flex-col bg-white w-full min-h-[96px] rounded-2xl shadow-sm p-[24px]'>
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-4 w-full">
                    <Avatar className="w-[48px] h-[48px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold text-gray-800">Liao Yizhe</h2>
                </div>

                <button onClick={toggleMenu}>
                    {isOpen ? <X className="text-gray-500" /> : <Menu className="text-gray-500" />}
                </button>
            </div>

            {isOpen && (
                <div className="w-full mt-2">
                    {/* 導航列表 */}
                    <nav className="flex flex-col gap-4">
                        {navList.map((item) => {
                            const isActive = activeItem === item.id;
                            return (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    className={`flex p-3 w-full items-center gap-2 text-gray-500 font-bold ${isActive && 'text-black'}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setActiveItem(item.id);
                                        
                                    }}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.title}</span>

                                    {isActive && (
                                        <span className="absolute right-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="44"
                                                height="44"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-dot-icon lucide-dot"
                                            >
                                                <circle cx="12.1" cy="12.1" r="1" />
                                            </svg>
                                        </span>
                                    )}
                                </a>
                            )
                        })}
                    </nav>

                    {/* 社交媒體連結 */}
                    <div className="mt-8 flex gap-16 justify-center">
                        {social.map((item) => (
                            <a
                                key={item.label}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <item.icon />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
