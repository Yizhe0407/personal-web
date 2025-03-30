"use client"
import Link from "next/link";
import React, { useState } from 'react'
import { useActiveItem } from "@/lib/Context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { House, UserRound, BriefcaseBusiness, Layers, Menu, X, Mail, Instagram, Github, Linkedin } from 'lucide-react';

const navList = [
  { icon: House, title: "Home", url: "/", id: "home" },
  { icon: UserRound, title: "About", url: "/about", id: "about" },
  { icon: BriefcaseBusiness, title: "Project", url: "/projects", id: "project" },
  { icon: Layers, title: "Stack", url: "/stack", id: "stack" },
  { icon: Mail, title: "Contact", url: "/contact", id: "contact" },
] as const;

const social = [
  { icon: Github, title: "Github", url: "https://github.com/Yizhe0407" },
  { icon: Instagram, title: "Instagram", url: "https://www.instagram.com/roger_0407/" },
  { icon: Linkedin, title: "LinkedIn", url: "https://www.linkedin.com/in/yizhe-liao/" },
];

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { activeItem, setActiveItem } = useActiveItem();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed w-full px-4 mt-4 min-h-[96px]">
      <div className=" p-[24px] flex flex-col bg-white shadow-sm rounded-2xl sm:hidden">
        <div className="w-full flex justify-between">
          <div className="w-full flex items-center gap-4">
            <Avatar className="w-[48px] h-[48px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" flex-col text-start">
              <h2 className="text-lg font-bold text-gray-800">Liao Yizhe</h2>
              <p className=" text-xs text-gray-500 font-bold">Web Developer and Student</p>
            </div>
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
                  <Link
                    key={item.id}
                    href={item.url}
                    className={`w-full p-3 flex items-center gap-2 font-bold text-gray-500 ${isActive && "text-black"
                      }`}
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
                        >
                          <circle cx="12.1" cy="12.1" r="1" />
                        </svg>
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 社交媒體連結 */}
            <div className="mt-8 flex justify-center gap-16">
              {social.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

  )
}
