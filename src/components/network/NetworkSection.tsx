import { Accordion } from "@radix-ui/react-accordion";
import { Search } from "lucide-react";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import NetworkCard from "./NetworkCard";

type Props = {};

const networks = [
  {
    image: "/assets/network/Frame.png",
    pImage: "/assets/network/profile/Frame.png",
    title: "cc__creative",
    level: "1",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "5.0",
    ratings: "570",
    price: "8,674",
  },
  {
    image: "/assets/network/Frame-1.png",
    pImage: "/assets/network/profile/Auto.png",
    title: "mukaramhussain0",
    level: "",
    subTitle: "Lorem ipsum dolor sit amet",
    stars: "5.0",
    ratings: "163",
    price: "868",
  },
  {
    image: "/assets/network/Frame-2.png",
    pImage: "/assets/network/profile/Auto1.png",
    title: "creativesmith99",
    level: "2",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "4.9",
    ratings: "49",
    price: "6072",
  },
  {
    image: "/assets/network/Frame-3.png",
    pImage: "/assets/network/profile/Auto2.png",
    title: "almomen980",
    level: "2",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "5.0",
    ratings: "570",
    price: "8,674",
  },
  {
    image: "/assets/network/Frame-3.png",
    pImage: "/assets/network/profile/Auto2.png",
    title: "almomen980",
    level: "2",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "5.0",
    ratings: "570",
    price: "8,674",
  },
  {
    image: "/assets/network/Frame-3.png",
    pImage: "/assets/network/profile/Auto2.png",
    title: "almomen980",
    level: "2",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "5.0",
    ratings: "570",
    price: "8,674",
  },
  {
    image: "/assets/network/Frame-3.png",
    pImage: "/assets/network/profile/Auto2.png",
    title: "almomen980",
    level: "2",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "5.0",
    ratings: "570",
    price: "8,674",
  },
  {
    image: "/assets/network/Frame.png",
    pImage: "/assets/network/profile/Frame.png",
    title: "cc__creative",
    level: "1",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Suspendisse.",
    stars: "5.0",
    ratings: "570",
    price: "8,674",
  },
];
const NetworkSection = (props: Props) => {
  return (
    <div className="py-4 px-8 flex flex-col gap-10">
      <div className="relative w-[70%] mx-auto">
        <input
          type="text"
          className="w-full py-2 px-4 pr-12 rounded-sm border border-gray-300"
          placeholder="What service are you looking for today?"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[black] text-white h-full px-5 rounded-sm">
          <Search />
        </button>
      </div>
      <div className="flex">
        <aside className="w-[25%] p-2  rounded-md border-gray-300">
          <Accordion type="multiple" className="w-full border   ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#f1f5fb] border px-6 mb-2 text-xl font-semibold">
                Category
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center py-4 px-4">
                <select className="w-[95%] py-4 px-4 rounded-md border  border-gray-300">
                  <option value="" disabled selected className="">
                    Category
                  </option>
                  <option value="cat1">Category 1</option>
                  <option value="cat2">Category 2</option>
                  <option value="cat3">Category 3</option>
                </select>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-[#f1f5fb] border mb-2 px-6 text-xl font-semibold">
                Topic
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center py-4 px-4">
                <select className="w-[95%] py-4 px-4 rounded-md border border-gray-300">
                  <option value="" disabled selected className="">
                    Topic
                  </option>
                  <option value="topic1">Topic 1</option>
                  <option value="topic2">Topic 2</option>
                  <option value="topic3">Topic 3</option>
                </select>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-[#f1f5fb] border px-6 mb-2 text-xl font-semibold">
                Topic
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center py-4 px-4">
                <select className="w-[95%] py-4 px-4 rounded-md border border-gray-300">
                  <option value="" disabled selected className="">
                    Topic
                  </option>
                  <option value="topic1">Topic 1</option>
                  <option value="topic2">Topic 2</option>
                  <option value="topic3">Topic 3</option>
                </select>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-center items-center">
            <button className="w-[90%] py-3  bg-[#02214F] text-white font-bold rounded-sm font-ubuntu text-xl">
              Search
            </button>
          </div>
        </aside>
        <div className="flex flex-wrap items-center justify-center w-[90%] gap-x-2  gap-y-20">
          {networks.map((n, idx) => (
            <div key={idx}>
              <NetworkCard
                image={n.image}
                pImage={n.pImage}
                level={n.level}
                ratings={n.ratings}
                price={n.price}
                stars={n.stars}
                subTitle={n.subTitle}
                title={n.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkSection;
