import Image from "next/image";
import React from "react";

type Props = {};

const PersonalImage = (props: Props) => {
  return (
    <Image
      src={"/assets/Personal.png"}
      alt="Personal"
      width={653}
      height={371.09}
      className=""
    />
  );
};

export default PersonalImage;
