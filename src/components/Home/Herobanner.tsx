import { Search } from "lucide-react";
import React from "react";

type Props = {};

const Herobanner = (props: Props) => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0  bg-black opacity-50 w-full h-[550px] z-20"></div>
      <div className=" absolute z-10 top-0 left-0 w-full bg-herobanner bg-cover h-[550px] bg-no-repeat"></div>
      <div className="w-[80%] lg:w-[50%] z-50 h-[550px] mx-auto flex flex-col py-24 gap-8 text-white justify-center items-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white opacity-100">
          Pseudo Code
        </h1>
        <p>Your student-centered, AI-powered study program consultant</p>
        <input
          type="text"
          className="w-full py-4 px-6 bg-white text-black rounded-lg"
          placeholder="Search here"
        />
        <button className="flex justify-center w-[50%] font-bold rounded-lg py-3 bg-[#008080] items-center gap-2">
          <Search />
          Search
        </button>
      </div>
    </div>
  );
};

export default Herobanner;
