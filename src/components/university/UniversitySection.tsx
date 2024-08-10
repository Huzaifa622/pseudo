import { Search } from "lucide-react";
import React from "react";
import ProgramCard from "./UniversityCard";
import UniversityCard from "./UniversityCard";

type Props = {};
const university = [
  {
    Image: "/assets/university/Group1.png",
    pImage: "/assets/university/profile.png",
    title: "University of chicago",
    name: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    views: "251,232",
  },
  {
    Image: "/assets/university/Group2.png",
    pImage: "/assets/university/profile.png",
    title: "University of chicago",
    name: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    views: "251,232",
  },
  {
    Image: "/assets/university/Group3.png",
    pImage: "/assets/university/profile.png",
    title: "Patroleum University Germany",
    name: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    views: "251,232",
  },
  {
    Image: "/assets/university/Group1.png",
    pImage: "/assets/university/profile.png",
    title: "Patroleum University Germany",
    name: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    views: "251,232",
  },
  {
    Image: "/assets/university/Group2.png",
    pImage: "/assets/university/profile.png",
    title: "University of chicago",
    name: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    views: "251,232",
  },
  {
    Image: "/assets/university/Group3.png",
    pImage: "/assets/university/profile.png",
    title: "University of chicago",
    name: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    views: "251,232",
  },
];
const UniversitySection = (props: Props) => {
  return (
    <div className="py-10 ">
      <div className="px-8">
        <h2 className="text-2xl font-bold my-4">Find your program</h2>
        <div className="flex md:flex-row flex-col gap-4 mb-8 px-4">
          <select className="flex-1  px-4 rounded-lg text-[#7E7E7E] shadow-xl py-4">
            <option value="" disabled selected>
              Select Country
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            {/* Add more countries as needed */}
          </select>
          <select className="flex-1  px-4 rounded-lg text-[#7E7E7E] shadow-xl py-4">
            <option value="" disabled selected>
              Select Field of Study
            </option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div className="flex md:flex-row flex-col gap-4 px-4">
          <input
            type="text"
            className="flex-1  px-4 rounded-lg text-[#7E7E7E] shadow-xl py-4"
            placeholder="Search by name"
          />
          <button className="flex gap-4 justify-center items-center  py-2 px-24 bg-[#008080] text-white font-bold rounded-lg ">
            <Search />
            Search
          </button>
        </div>
      </div>
      <div className="flex w-full flex-wrap transition-all duration-300  items-center px-4 md:px-0 justify-center  py-12 gap-6 ">
        {university.map((u, idx) => (
          <UniversityCard
            key={idx}
            image={u.Image}
            name={u.name}
            title={u.title}
            description={u.description}
            views={u.views}
            pImage={u.pImage}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversitySection;
