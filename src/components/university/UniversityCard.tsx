import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  pImage: string;
  title: string;
  name: string;
  description: string;
  views: string;
};

const UniversityCard = ({
  image,
  pImage,
  name,
  title,
  description,
  views,
}: Props) => {
  return (
    <div className="w-full bg-white md:w-[40%] lg:w-[30%] h-[450px]  font-poppins rounded-lg p-4 hover:shadow-2xl hover:transition-all hover:duration-300 border">
      <Image src={image} alt="asd" width={422.83} height={224.63} />
      <div className="py-4">
        <h1 className="font-semibold">{title}</h1>
        <div className="flex items-center gap-2 py-4">
          <Image
            src={pImage}
            alt="asd"
            width={41.64}
            height={41.64}
            className="rounded-full"
          />
          <h4>{name}</h4>
        </div>
        <p className="pb-8 text-[#696984] text-xs">{description}</p>
        <div className="flex justify-between text-[#696984]">
          <button className="hover:underline hover:text-black">
            Read More
          </button>
          <div className="flex items-center gap-2">
            <Eye size={16} color="#696984" />
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
