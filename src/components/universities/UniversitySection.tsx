import { Search } from "lucide-react";
import React from "react";

type Props = {};

const UniversitySection = (props: Props) => {
  return (
    <div className="py-10 px-16">
      <h2 className="text-2xl font-bold mb-4">Find your program</h2>
      <div className="flex gap-4 mb-8">
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
          {/* Add more fields of study as needed */}
        </select>
      </div>
      <div className="flex gap-4">
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
  );
};

export default UniversitySection;
