import { MapPinned } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  profession: string;
};

const HomeCard = ({ image, title, profession }: Props) => {
  return (
    <div className="relative  font-poppins flex flex-col  justify-center  gap-4 p-4 rounded-xl shadow-xl">
      <div className="absolute bottom-16 right-8">
        <Image
          src={"/assets/Group.png"}
          alt="logo"
          width={84.03}
          height={144}
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt="img"
          width={170}
          height={170}
          className="w-[170px] h-[170px] border-2 border-[#008080] rounded-full p-1"
        />
      </div>
      <div>
        <h1 className="font-semibold text-lg text-start">{title}</h1>
      </div>
      <h4 className="">{profession}</h4>
      <div className="text-[#696984]">
        <div>
          <h1 className="text-[#008080] flex gap-2 items-center py-2">
            100+ <MapPinned />
          </h1>
          <p>
            Students admitted to top universities (Harvard, Cambridge, Caltech,
            Bocconi)
          </p>
        </div>
        <div>
          <h1 className="text-[#008080] flex gap-2 items-center py-2">
            Top 5 <MapPinned />
          </h1>
          <p>SAT tutors in the whole world in 2020 based on results.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
