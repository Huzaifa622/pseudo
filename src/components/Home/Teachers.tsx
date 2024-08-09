import Image from "next/image";
import React from "react";
import HomeCard from "../ui/HomeCard";
import { Phone } from "lucide-react";

type Props = {};
const teachers = [
  {
    image: "/assets/teachers/Rectangle1.png",
    title: "AI Entrepreneurship Lab",
    profession: "SAT English Tutor & Educational Consultant",
  },
  {
    image: "/assets/teachers/Rectangle2.png",
    title: "AI Entrepreneurship Lab",
    profession: "SAT English Tutor & Educational Consultant",
  },
  {
    image: "/assets/teachers/Rectangle3.png",
    title: "AI Entrepreneurship Lab",
    profession: "SAT English Tutor & Educational Consultant",
  },
  {
    image: "/assets/teachers/Rectangle4.png",
    title: "AI Entrepreneurship Lab",
    profession: "SAT English Tutor & Educational Consultant",
  },
];

const Teachers = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-12 py-8">
      <div className="flex flex-col justify-center items-end ">
        <div className="flex justify-items-end items-end">
          <button className=" text-right text-[#018080]">
            <span>See All</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-4  justify-center items-center">
          {teachers.map((t, idx) => (
            <div key={idx}>
              <HomeCard
                image={t.image}
                title={t.title}
                profession={t.profession}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="text-white flex gap-2 items-center px-12 py-4 bg-[#008080] font-bold rounded-lg">
        <Phone />
        Schedule a free consultancy call
      </button>
    </div>
  );
};

export default Teachers;
