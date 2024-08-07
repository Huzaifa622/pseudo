import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image src={"/assets/Logo.png"} width={245.41} height={49.91} alt="Logo" />
  );
};

export default Logo;
