import Image from "next/image";
import React from "react";

type Props = {};

const About2 = (props: Props) => {
  return (
    <div className="flex px-4 gap-12 flex-wrap justify-center items-center">
      <div className="w-full md:w-[40%]">
        <Image
          src={"/assets/about2.png"}
          alt="asd"
          width={619.15}
          height={409.63}
        />
      </div>
      <div className="w-full md:w-[40%] font-publicsans flex flex-col justify-center items-start gap-8">
        <h1 className="text-4xl font-semibold">
          Join <span className="text-[#20b486] ">World's largest</span> learning
          platform today
        </h1>
        <h4 className="text-lg ">Start learning by registering for free</h4>
        <button className="px-8 py-4 text-white bg-[#20B486] rounded-lg">
          Sign up for Free
        </button>
      </div>
    </div>
  );
};

export default About2;
