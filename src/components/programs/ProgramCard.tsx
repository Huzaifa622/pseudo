import Image from "next/image";
import React from "react";

type Props = {};

const ProgramCard = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-around w-[332px] h-[396px] rounded-lg p-4 font-poppins shadow-xl">
      <div className="flex justify-between text-xs">
        <h1>Tution fee</h1>
        <h1>Unspecified</h1>
      </div>
      <h1 className="font-medium text-xl">(Hons) Accounting and Finance</h1>
      <p className="text-[#696984] text-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
        tempor
      </p>
      <div className="flex items-center gap-2">
        <Image src={"/assets/Germany.png"} alt="asd" width={38} height={38} />
        <span className="text-xs font-semibold">Berlin, Germany</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="italic font-light">Tuition Fee</span>
        <span className="font-bold text-[#008080] ">$8000 Eur/ Year</span>
      </div>
      <button className="absolute -bottom-5  w-[50%] py-2 rounded-lg left-20 bg-[#008080] text-white font-bolf ">View</button>
    </div>
  );
};

export default ProgramCard;
