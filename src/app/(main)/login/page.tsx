import GoogleSignUpButton from "@/components/ui/GoogleSignUpButton";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className=" font-poppins  flex justify-around items-center overflow-hidden  ">
      <div className=" w-[40%] pl-12 py-8 ">
        <div className="py-4">
          <Logo />
        </div>
        <div className="flex justify-between items-start mt-4">
          <h1 className="text-sm">
            Welcome to <span className="font-semibold">Pseudo Code</span>
          </h1>
          <div className="mt-1 flex flex-col items-start gap-1 text-xs">
            <h5 className="text-[#8D8D8D] text-nowrap">No Account ?</h5>
            <button>Sign Up</button>
          </div>
        </div>
        <h1 className="text-4xl font-medium">Sign in</h1>
        <GoogleSignUpButton />
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 italic">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* <div className=" text-base flex flex-wrap    justify-center items-center gap-2 py-4">
          <div className="flex items-center group  transition-all duration-300 justify-center text-center px-5 py-4  rounded-[9px] bg-[#E9F1FF] text-[#4285F4]">
            <button className="flex items-center transition-all duration-300 text-sm text-nowrap gap-5">
              <span className="transition-all duration-300">
                <FcGoogle size={24} />
              </span>
              <span className="hidden md:group-hover:block transition-all group-hover:duration-300">
                Sign in with Google
              </span>
            </button>
          </div>
          <div className="flex items-center group transition-all duration-300 justify-center text-center px-5 py-4 rounded-[9px] bg-[#E9F1FF] text-[#4285F4]">
            <button className="flex items-center transition-all duration-300 text-sm text-nowrap gap-5">
              <span className="transition-all duration-300">
                <FaFacebook size={24} color="blue" />
              </span>
              <span className="hidden md:group-hover:block transition-all group-hover:duration-300">
                Sign in with Facebook
              </span>
            </button>
          </div>
          <div className="flex items-center group transition-all duration-300 justify-center text-center px-5 py-4 rounded-[9px] bg-[#E9F1FF] text-[#4285F4]">
            <button className="flex items-center transition-all duration-300 text-sm text-nowrap gap-5">
              <span className="transition-all duration-300">
                <FaApple
                  size={24}
                  className="bg-black text-white rounded-full p-1"
                />
              </span>
              <span className="hidden md:group-hover:block transition-all group-hover:duration-300">
                Sign in with Apple
              </span>
            </button>
          </div>
        </div> */}
        <div className="pt-16">
          <form>
            <div className="relative mb-14">
              <label
                className={`absolute left-0 font-medium text-xs -top-6 transition-all  duration-300  `}
              >
                Enter your username or email address
              </label>
              <input
                type="text"
                className={`w-full rounded-lg focus:border-blue-400 border-2 px-2 py-2 transition-all outline-none duration-300  `}
              />
            </div>
            <div className="relative ">
              <label
                className={`absolute left-0 font-medium text-xs -top-6 transition-all  duration-300  `}
              >
                Password
              </label>
              <input
                type="password"
                className={`w-full rounded-lg focus:border-blue-400 border-2 px-2 py-2 transition-all outline-none duration-300  `}
              />
              <div className="flex justify-end text-xs pt-2 pb-8 text-blue-400">
                <button>Forgot Password</button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#008080] w-full text-white py-4 font-mulish font-bold rounded-xl"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <Image src={"/assets/login.png"} alt="logo" width={592} height={492} />
      </div>
    </div>
  );
};

export default Login;
