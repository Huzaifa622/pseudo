import Image from "next/image";
import React from "react";

type Props = {};
const icons = [
  {
    image: "/assets/socialicons/w1.png",
  },
  {
    image: "/assets/socialicons/w2.png",
  },
  {
    image: "/assets/socialicons/w3.png",
  },
  {
    image: "/assets/socialicons/w4.png",
  },
];

const ScoialIcons = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      {icons.map((icon, idx) => (
        <div key={idx}>
          <Image src={icon.image} alt="oac" width={27} height={27} />
        </div>
      ))}
    </div>
  );
};

export default ScoialIcons;
