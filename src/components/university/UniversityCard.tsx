"use client";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiCreditCard1, CiLocationOn } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Link
      href={"/programs"}
      className={cn(
        "transition-opacity duration-1000 ease-in-out transform w-full  bg-white sm:w-[40%] md:w-[33%] lg:w-[20%]  hover:shadow-2xl hover:transition-all hover:duration-300 border border-gray-300 rounded-xl",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="  font-poppins flex flex-col justify-center items-center  p-6 ">
        <div className="w-44 h-28">
          <Image src={image} alt="asd" width={422.83} height={224.63} />
        </div>
        <div className=" w-full">
          <div className="text-center">
            <h1 className="font-semibold text-lg  h-[60px] text-[#49275C]">
              {title}
            </h1>
          </div>
          {/* <div className="flex items-center gap-2 py-4">
          <Image
            src={pImage}
            alt="asd"
            width={41.64}
            height={41.64}
            className="rounded-full"
          />
          <h4>{name}</h4>
        </div> */}
          {/* <p className="pb-8 text-[#696984] text-xs">{description}</p> */}
          <div className="flex flex-col gap-4 pt-5 justify-between text-[#696984]">
            <div className="flex items-center gap-2">
              <div className="bg-[#ECE9EE] p-3 rounded-xl">
                <MdOutlineLocationOn size={24} color="#49275C" />
              </div>
              <div>
                <h1 className="text-sm">Location</h1>{" "}
                <h1 className="text-[#49275C] font-medium">Germany</h1>{" "}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#ECE9EE] p-3 rounded-xl">
                <CiCreditCard1 size={24} color="#49275C" />
              </div>
              <div>
                <h1 className="text-sm">Tuition fee</h1>{" "}
                <h1 className="text-[#49275C] font-medium">$ 1000</h1>{" "}
              </div>
            </div>
            <button className=" w-full text-[#D93471] rounded-xl hover:bg-pink-100   py-2 ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UniversityCard;
