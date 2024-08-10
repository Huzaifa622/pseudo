import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import RecommededBtn from "./RecommededBtn";
import AICard from "./AICard";
import Link from "next/link";
type Props = {};
const program = [
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
  {
    image: "/assets/ai/pic.png",
    title: "Master of Psychology (Community)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    country: "Australia",
    city: "Joondalup",
  },
];
const AISection = (props: Props) => {
  return (
    <div className="px-18 py-16 font-ubuntu">
      <div className="flex justify-center md:justify-end px-8 py-4">
        <Link
          href="/contact"
          className="bg-[#e5f2f2] text-[#008080] px-6 py-2 rounded-lg"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col px-2">
        <div className="flex justify-center">
          <h1 className="w-[60%] text-2xl md:text-5xl text-center font-bold text-[#008080]">
            Search anything and find your dream programme (AI)
          </h1>
        </div>
        <div className=" rounded-xl border px-8 py-6 my-10">
          <form action="">
            <div className="flex md:flex-row flex-col items-center gap-2  mb-4">
              <div className="w-full md:w-[60%] ">
                <input
                  type="text"
                  placeholder="Search anything to find your desired programme"
                  className="w-full py-4 px-4 shadow-xl border border-gray-300 rounded-lg"
                />
              </div>

              <Select>
                <SelectTrigger className="md:w-[40%] py-7 px-4 border text-[#7E7E7E] border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-white">
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 pb-12">
              <RecommededBtn />
              <RecommededBtn />
              <RecommededBtn />
              <RecommededBtn />
            </div>
            <div className="flex justify-center items-center">
              <button className="flex justify-center px-28 py-3 items-center gap-2 rounded-lg font-bold text-xl bg-[#008080] text-white">
                <Search /> Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8  gap-y-16">
          {program.map((p, idx) => (
            <div
              key={idx}
              className="w-full bg-white md:w-[40%] lg:w-[20%] border hover:shadow-2xl rounded-[20px] "
            >
              <AICard
                image={p.image}
                title={p.title}
                desc={p.desc}
                city={p.city}
                country={p.country}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISection;
