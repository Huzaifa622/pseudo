import Image from "next/image";
import React from "react";

type Props = {};

const ProgramCard = (props: Props) => {
  return (
    <div className="relative bg-white border border-gray-300 flex flex-col justify-around lg:w-[20%] md:w-[40%] w-full rounded-lg p-4 font-poppins shadow-xl gap-3">
      <div className="flex justify-between text-xs">
        <h1>Tution fee</h1>
        <h1>Unspecified</h1>
      </div>
      <h1 className="font-medium text-base">(Hons) Accounting and Finance</h1>
      <p className="text-[#696984] text-xs">
        Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
        tempor
      </p>
      <div className="flex items-center gap-2">
        <Image src={"/assets/Germany.png"} alt="asd" width={38} height={38} />
        <span className="text-xs font-semibold">Berlin, Germany</span>
      </div>
      <div className="flex justify-between items-center text-xs ">
        <span className="italic font-light">Tuition Fee</span>
        <span className="font-bold text-[#008080] ">$8000 Eur/ Year</span>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="absolute -bottom-5 w-[50%] py-2 rounded-lg left-[25%] bg-[#008080] text-white font-bolf ">
          View
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
