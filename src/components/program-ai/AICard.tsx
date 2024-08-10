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
    <div className="relative   flex flex-col justify-between font-poppins gap-4 p-5">
      <div className="flex items-center gap-4">
        <Image src={image} alt="imae" width={40} height={40} />
        <h1 className="text-sm font-medium text-[#49275C]">{title}</h1>
      </div>
      <p className="text-[#696984] text-sm">{desc}</p>
      <div className="flex flex-col gap-3 pt-6 text-sm">
        <div className="flex gap-2 items-center">
          <div className="bg-[#ECE9EE] p-3 rounded-xl">
            <MapPinned color="#49275C" />
          </div>
          <div>
            <h1 className="text-sm">Country</h1>
            <h1 className="font-bold text-[#49275C]">{country}</h1>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#ECE9EE] p-3 rounded-xl">
            <MapPinned color="#49275C" />
          </div>
          <div>
            <h1 className="text-sm">City</h1>
            <h1 className="font-bold text-[#49275C]">{city}</h1>
          </div>
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
