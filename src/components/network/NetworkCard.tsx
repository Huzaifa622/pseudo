import { Heart, Menu, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

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
  return (
    <div className="w-[230.06px] h-[315.23px]">
      <div className=" border rounded-sm flex flex-col justify-between">
        <Image src={image} alt="asd" width={228.3} height={228.3} />
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
          <p className="h-[52.69px]">{subTitle}</p>
          <div className="flex gap-1 text-[10px]">
            <Star color="#FFBE5B" size={13} />
            {stars}({ratings})
          </div>
        </div>
      </div>
      <div className="border border-t-none py-2 px-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Menu size={24} color="#B5B6BA" />
          <Heart size={24} color="#B5B6BA" />
        </div>
        <div className="">
          <h4 className="uppercase text-[8px] text-[#74767E] font-bold">
            Starting at
          </h4>
          <h1>₹{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;
