import Image from "next/image";
import React from "react";

type Props = {};

const About2 = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[40%]">
        <Image
          src={"/assets/about2.png"}
          alt="asd"
          width={619.15}
          height={409.63}
        />
      </div>
      <div className="w-[40%]">
        <h1 className="text-4xl">
          Join <span className="text-[#20b486]">World's largest</span> learning
          platform today
        </h1>
        <h4>Start learning by registering for free</h4>
        <button className="px-8 py-4 text-white">Sign up for Free</button>
      </div>
    </div>
  );
};

export default About2;
