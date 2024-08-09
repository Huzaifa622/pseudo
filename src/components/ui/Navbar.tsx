"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-[80%] mx-auto py-2 font-ubuntu flex justify-between items-center">
      <Logo />

      <nav className=" hidden lg:flex   items-center gap-24 text-sm font-semibold">
        <ul className="flex gap-10">
          <Link
            href={"/"}
            className={cn("relative", pathname === "/" && "text-[#008080]")}
          >
            {" "}
            <div
              className={cn(
                pathname === "/"
                  ? "before:absolute before:w-full before:h-[1px] before:bg-[#008080] before:bottom-0 before:left-0"
                  : ""
              )}
            ></div>
            Home
          </Link>
          <Link
            className={cn(
              "relative",
              pathname === "/network" && "text-[#008080]"
            )}
            href={"/network"}
          >
            <div
              className={cn(
                pathname === "/network"
                  ? "before:absolute before:w-full before:h-[1px] before:bg-[#008080] before:bottom-0 before:left-0"
                  : ""
              )}
            ></div>
            Network Side
          </Link>
          <Link
            className={cn("relative", pathname === "/llm" && "text-[#008080]")}
            href={"/llm"}
          >
            <div
              className={cn(
                pathname === "/llm"
                  ? "before:absolute before:w-full before:h-[1px] before:bg-[#008080] before:bottom-0 before:left-0"
                  : ""
              )}
            ></div>
            LLM
          </Link>
          <Link
            className={cn(
              "relative",
              pathname === "/university" && "text-[#008080]"
            )}
            href={"/university"}
          >
            <div
              className={cn(
                pathname === "/university"
                  ? "before:absolute before:w-full before:h-[1px] before:bg-[#008080] before:bottom-0 before:left-0"
                  : ""
              )}
            ></div>
            University Side
          </Link>
          <Link
            className={cn(
              "relative",
              pathname === "/blogs" && "text-[#008080]"
            )}
            href={"/blogs"}
          >
            <div
              className={cn(
                pathname === "/blogs"
                  ? "before:absolute before:w-full before:h-[1px] before:bg-[#008080] before:bottom-0 before:left-0"
                  : ""
              )}
            ></div>
            Blogs
          </Link>
        </ul>
        <Link href={"/profile"}>
          <Avatar
            className={cn(
              pathname === "/profile" ? "border-2  border-green-600" : ""
            )}
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
