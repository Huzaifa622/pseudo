import GoogleSignUpButton from "@/components/ui/GoogleSignUpButton";
import Logo from "@/components/ui/Logo";
import PersonalImage from "@/components/ui/PersonalImage";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {};

const Personal = (props: Props) => {
  return (
    <div className="flex  justify-evenly font-ubuntu items-center">
      <div className="w-full lg:w-[40%] px-12 py-8">
        <div className="py-4">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold py-4">Personal Info</h1>
        <p className="text-lg text-[#666666CC]">
          Lorem ipsum dolor sit amet nsectetur. Elit nunc scelerisque.
        </p>
        <GoogleSignUpButton />
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 italic">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form className=" font-ubuntu mt-4">
          {/* First Name and Last Name */}
          <div className="  mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full py-4 px-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="  mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full py-4 px-4 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Gender */}
          <div className="flex mb-4 items-center gap-16 px-4 py-2 text-[#666666]">
            <label className="">Gender</label>
            <div className="flex space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>

          <div className="flex space-x-4 mb-4 text-[#666666]">
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Date</option>
              {/* Add options for dates */}
              {[...Array(31)].map((day, idx) => (
                <option key={idx} value={idx + 1}>
                  {Number(idx + 1)}
                </option>
              ))}
            </select>
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Month</option>

              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Year</option>
              {/* Add options for years */}
              {Array.from(
                { length: 100 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 text-[#666666]">
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Country of Birth</option>
              {/* Add options for countries */}
              {["USA", "Canada", "UK", "Australia", "India"].map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 text-[#666666]">
            <select className="w-full py-4 px-4 border text-inherit border-gray-300 rounded-lg">
              <option value="" className="text-inherit">
                Nationality
              </option>
              {/* Add options for nationalities */}
              {["American", "Canadian", "British", "Australian", "Indian"].map(
                (nationality) => (
                  <option key={nationality} value={nationality}>
                    {nationality}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="mb-4 text-[#666666]">
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Nationality 2</option>
              {/* Add options for nationalities */}
              {["American", "Canadian", "British", "Australian", "Indian"].map(
                (nationality) => (
                  <option key={nationality} value={nationality}>
                    {nationality}
                  </option>
                )
              )}
            </select>
          </div>
          {/* Next Button */}
          <div className="w-[80%] mx-auto">
            <button
              type="submit"
              className="px-4 py-3 w-full bg-[#008080] text-white rounded-lg"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <PersonalImage />
      </div>
    </div>
  );
};

export default Personal;
