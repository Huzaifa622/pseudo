"use client";
import { cn } from "@/lib/utils";
import { Menu, Star, Heart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoHeartSharp } from "react-icons/io5";

type Props = {
  image: string;
  pImage: string;
  title: string;
  level: string;
  subTitle: string;
  stars: string;
  ratings: string;
  price: string;
};

const NetworkCard = ({
  image,
  pImage,
  title,
  level,
  subTitle,
  stars,
  ratings,
  price,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const [isClick, setClick] = useState(false);
  return (
    <div
      className={cn(
        " transition-opacity duration-1000 ease-in-out transform bg-white hover:shadow-2xl hover:transition-all hover:duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className=" border rounded-sm flex flex-col justify-between">
        <div className="w-fit">
          <Image src={image} alt="asd" width={1000} height={1000} />
        </div>
        <div className="p-2 flex flex-col justify-between  gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={pImage}
              alt="ad"
              width={21.07}
              height={21.07}
              className="rounded-full"
            />
            <div className="text-xs flex flex-col h-[47.42px] justify-center">
              <span className="font-semibold">{title}</span>
              {level ? (
                level === "1" ? (
                  <span className="text-yellow-300"> Top level Consultant</span>
                ) : (
                  <span> Level {level} Consultant</span>
                )
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <p className="h-[52.69px] text-sm">{subTitle}</p>
          <div className="flex gap-1 text-[10px]">
            <Star color="#FFBE5B" size={13} />
            {stars}({ratings})
          </div>
        </div>
        <div className="border-t py-2 px-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Menu size={24} color="#B5B6BA" />
            <IoHeartSharp
              onClick={() => setClick(!isClick)}
              size={26}
              className="cursor-pointer "
              color={isClick ? "#CD0303" : "#B5B6BA"}
            />
          </div>
          <div className="">
            <h4 className="uppercase text-[8px] text-[#74767E] font-bold">
              Starting at
            </h4>
            <h1>₹{price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;
