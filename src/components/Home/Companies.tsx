import Image from "next/image";
import React from "react";

type Props = {};
const logos = [
  {
    image: "/assets/companylogos/Frame4.png",
  },
  {
    image: "/assets/companylogos/Frame5.png",
  },
  {
    image: "/assets/companylogos/Frame6.png",
  },
  {
    image: "/assets/companylogos/Frame7.png",
  },
  {
    image: "/assets/companylogos/Frame8.png",
  },
  {
    image: "/assets/companylogos/Frame9.png",
  },
];
const Companies = (props: Props) => {
  return (
    <div className="flex justify-center gap-8 items-center p-4 py-12 ">
      {logos.map((l, idx) => (
        <div key={idx}>
          <Image
            src={l.image}
            alt="logo"
            width={180}
            height={50}
            className="grayscale"
          />
        </div>
      ))}
    </div>
  );
};

export default Companies;
