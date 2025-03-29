"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { useActiveItem } from "@/lib/Context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  House,
  UserRound,
  BriefcaseBusiness,
  Layers,
  Mail,
  X,
  Menu,
  Instagram,
  Github,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeItem, setActiveItem } = useActiveItem();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 頂部欄 */}
      <div className="w-full min-h-[96px] p-[24px] flex flex-col bg-white shadow-sm rounded-2xl sm:hidden">
        <div className="w-full flex justify-between">
          <div className="w-full flex items-center gap-4">
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

      {/* 側邊欄 */}
      <div className="w-[80px] lg:w-[256px] h-full py-8 p-[16px] lg:p-[24px] hidden sm:block bg-white shadow-md rounded-2xl justify-center">
        <div className="w-full lg:w-[208px] mt-2 lg:mt-1 flex flex-col items-center gap-4">
          {/* 頭像與名稱 */}
          <div className="w-full flex flex-col items-center gap-4 mb-6">
            <Avatar className="w-[48px] h-[48px] lg:w-28 lg:h-28">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-gray-800 hidden lg:inline">Liao Yizhe</h2>
          </div>

          {/* 導航列表 */}
          <div className="w-full flex flex-col gap-20 lg:gap-8">
            <div className="w-full flex flex-col gap-1">
              {navList.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <Link href={item.url} key={item.id}>
                    <Button
                      key={item.title}
                      variant="ghost"
                      className={`w-full h-12 relative flex items-center gap-2 font-bold text-gray-500 group ${isActive ? "text-black hover:bg-transparent" : "hover:cursor-pointer"
                        } justify-center lg:justify-start`}
                      onClick={() => !isActive && setActiveItem(item.id)}
                    >
                      <item.icon className="group-hover:scale-110 transition-transform duration-300" />
                      <span className="hidden lg:inline transition-transform duration-300 group-hover:translate-x-1">
                        {item.title}
                      </span>
                      {isActive ? (
                        <span className="absolute right-2 hidden lg:inline">
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
                      ) : (
                        <span className="absolute right-2 opacity-0 hidden lg:inline group-hover:opacity-100 transition-opacity">
                          <ArrowRight />
                        </span>
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* 社交媒體連結 */}
            <div className="w-full flex flex-col items-center gap-1">
              {social.map((item) => (
                <Link key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="ghost" className="w-full h-12 relative flex justify-center group lg:justify-start font-bold text-gray-500 hover:cursor-pointer">
                    <item.icon className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="hidden lg:inline transition-transform duration-300 group-hover:translate-x-1">
                      {item.title}
                    </span>
                    <span className="absolute right-2 opacity-0 hidden lg:inline group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight />
                    </span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
