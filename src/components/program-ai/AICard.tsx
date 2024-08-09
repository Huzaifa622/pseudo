import { MapPinned } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  desc: string;
  country: string;
  city: string;
};

const AICard = ({ image, title, desc, country, city }: Props) => {
  return (
    <div className="relative w-[334.63px] h-[366.98px] flex flex-col justify-between shadow-2xl rounded-[20px] font-poppins py-10 px-5">
      <div className="flex items-center gap-4">
        <Image src={image} alt="imae" width={63.58} height={63.58} />
        <h1 className="text-lg font-medium">{title}</h1>
      </div>
      <p className="text-[#696984] ">{desc}</p>
      <div className="flex flex-col gap-6 pt-4 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPinned color="#008080" />
            <span className="font-semibold">Country</span>
          </div>
          <span>{country}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPinned color="#008080" />
            <span className="font-semibold">City</span>
          </div>
          <span>{city}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="font-ubuntu  py-3 rounded-lg px-2 absolute bg-[#008080] flex justify-center items-center w-[50%] text-white -bottom-8 left-[25%]">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default AICard;
