"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiAlignLeft, FiAlignRight } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-white w-full">
      <div className="w-[80%]  mx-auto py-2 font-ubuntu flex justify-between items-center">
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
              className={cn(
                "relative",
                pathname === "/llm" && "text-[#008080]"
              )}
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
            <Link
              className={cn(
                "relative",
                pathname === "/login" && "text-[#008080]"
              )}
              href={"/login"}
            >
              <div
                className={cn(
                  pathname === "/login"
                    ? "before:absolute before:w-full before:h-[1px] before:bg-[#008080] before:bottom-0 before:left-0"
                    : ""
                )}
              ></div>
              Login
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
        <div className="lg:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <FiAlignRight size={25} />
            </SheetTrigger>
            <SheetContent className="text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-l border-gray-100">
              <SheetHeader>
                <SheetTitle className="text-4xl font-saira">
                  <Logo />
                </SheetTitle>
                <div className="flex flex-col justify-evenly mt-14 items-center py-4 text-lg h-[50vh]">
                  <SheetDescription className="flex flex-col items-center gap-4">
                    <SheetClose>
                      <Link href={"/"}>
                        <>Home</>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/network"}> Network side</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/llm"}> LLM</Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link href={"/university"}> University Side</Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link href={"/blogs"}> Blogs</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/profile"}>
                        <Avatar
                          className={cn(
                            pathname === "/profile"
                              ? "border-2  border-green-600"
                              : ""
                          )}
                        >
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </Link>
                    </SheetClose>
                  </SheetDescription>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
