"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { useActiveItem } from "@/lib/Context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  House,
  UserRound,
  BriefcaseBusiness,
  Layers,
  Mail,
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
  const { activeItem, setActiveItem } = useActiveItem();

  return (
    <div className="hidden sm:block m-4 p-4 bg-white shadow-md rounded-2xl ">
      <div className="w-full h-full lg:w-[208px] mt-2 flex flex-col gap-4">
        {/* 頭像與名稱 */}
        <div className="w-full flex flex-col items-center gap-4 mb-6">
          <Avatar className="w-[48px] h-[48px] lg:w-28 lg:h-28">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className=" flex-col hidden lg:block  text-center">
            <h2 className="text-lg font-bold text-gray-800">Liao Yizhe</h2>
            <p className=" text-xs text-gray-500 font-bold">Web Developer and Student</p>
          </div>
        </div>

        {/* 導航列表 */}
        <div className="w-full grow grid gap-4">
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

          {/* 分隔線 */}
          <div className="w-full h-[1px] bg-gray-200 my-2" />

          {/* 社交媒體連結 */}
          <div className="w-full h-full flex flex-col gap-1 justify-end">
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
  );
}
