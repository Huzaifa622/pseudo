import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {};

const GoogleSignUpButton = (props: Props) => {
  return (
    <div className="py-4 ">
      <button className="flex border font-medium  gap-3 text-sm rounded-full justify-center items-center border-black  w-full py-4 px-3 text-center ">
        <FcGoogle size={24} />
        <span className="italic">Sign up with your Google account</span>{" "}
      </button>
    </div>
  );
};

export default GoogleSignUpButton;
