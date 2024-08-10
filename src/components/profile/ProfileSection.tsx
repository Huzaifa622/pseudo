import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React from "react";

type Props = {};

const ProfileSection = (props: Props) => {
  return (
    <div className="px-4 md:px-28 py-16 font-ubuntu">
      <div className="flex justify-center md:justify-end px-8">
        <Link
          href={"/contact"}
          className="bg-[#e5f2f2] text-[#008080] px-6 py-4 rounded-lg"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col px-2">
        <h1 className="text-5xl text-center font-bold text-[#008080]">
          Profile
        </h1>
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-[15%] rounded-full">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold">Alexa Rawles</h1>
              <h1 className="text-sm">alexarawles@gmail.com</h1>
            </div>
          </div>
          <button className="text-white bg-[#008080] px-6 py-2 rounded-lg">
            Edit
          </button>
        </div>
      </div>
      <div className="border bg-white shadow-2xl border-gray-300 px-8 py-4 relative rounded-lg">
        <label className="absolute -top-5 font-bold left-3 text-2xl px-2 text-gray-600">
          Personal Info
        </label>
        <form>
          <div className="flex md:flex-row gap-4 flex-col mb-4">
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="First Name"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex mb-4 items-center gap-16 px-4 py-2 text-[#666666]">
              <label className="">Gender</label>
              <div className="flex flex-wrap space-x-8">
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
          </div>
          <div className="flex md:flex-row gap-4 flex-col mb-4">
            <div className="md:w-1/2 flex space-x-4 mb-4 text-[#666666]">
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

            <div className="w-full md:w-1/2 ">
              <input
                type="text"
                placeholder="Country of Birth"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-4 flex-col mb-4">
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="Nationality"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="2nd Nationality"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="border bg-white shadow-2xl border-gray-300 px-8 py-4 relative rounded-lg mt-16">
        <label className="absolute -top-5 font-bold left-3 text-2xl px-2 text-gray-600">
          Contact Info
        </label>
        <form>
          <div className="flex md:flex-row gap-4 flex-col mb-4">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Street number and additional info"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="Postcode"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-4 flex-col mb-4">
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="Town/City"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="Country"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-4 flex-col mb-4">
            <div className="md:w-1/2 ">
              <input
                type="text"
                placeholder="Phone number"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Email"
                className="w-full py-4 px-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;
