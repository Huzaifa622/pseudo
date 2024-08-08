import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[336px] flex justify-center items-center bg-[#018080] text-5xl text-white font-ubuntu font-bold">
      <div className="text-center">
        <h1 className="py-2">Programs</h1>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur. Nibh nisi diam massa urna.
        </p>
      </div>
    </div>
  );
};

export default Hero;
