import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const About1 = (props: Props) => {
  return (
    <div className="py-12 font-ubuntu">
      <div className="h-[526px] bg-[#F6F6F6] flex items-center  py-12">
        <div className=" flex justify-center items-center gap-4">
          <div className="w-[40%]">
            <Image
              src={"/assets/about1.png"}
              alt="asd"
              width={660.97}
              height={369.22}
            />
          </div>
          <div className="flex flex-col justify-between gap-4 w-[40%]">
            <h1 className="relative text-4xl font-bold py-2 text-[#02214F]">
              Lorem ipsum dolor sit amet
              <div className="before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[20%] before:bg-[#038291]"></div>
            </h1>
            <h2 className="font-medium  text-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque.
            </h2>
            <p className="text-base leading-[30px] text-[#6C747C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae urna diam. Maecenas commodo sem quis vulputate hendrerit.
              Donec sollicitudin erat at libero varius dictum. Maecenas tempus
              tellus a quam pretium laoreet. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
              ullamcorper.
            </p>
            <button className="text-[#02214F] flex gap-2 items-center font-semibold">
              Read More <ArrowRight size={20} color="#038291" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
