import Logo from "@/components/ui/Logo";
import PersonalImage from "@/components/ui/PersonalImage";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex  justify-evenly font-ubuntu items-end">
      <div className="w-[40%] pl-12 py-8">
        <div className="py-4">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold py-4">Contact</h1>

        <form className=" font-ubuntu mt-4">
          {/* First Name and Last Name */}
          <div className="  mb-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full py-4 px-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="  mb-4">
            <input
              type="text"
              placeholder="Street number and additional info"
              className="w-full py-4 px-4 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4 text-[#666666]">
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Postcode</option>
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
                Town/City
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
              <option value="">Country</option>
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
          <div className="flex items-center mb-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 italic">Contact</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="mb-4 text-[#666666]">
            <select className="w-full py-4 px-4 border border-gray-300 rounded-lg">
              <option value="">Phone number</option>
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
              <option value="">Email</option>
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
          <div className="w-[80%] mx-auto flex gap-4">
            <button className="px-4 py-3 w-full border border-black text-black rounded-lg">
              Previous
            </button>
            <button className="px-4 py-3 w-full bg-[#008080] text-white rounded-lg">
              Next Step
            </button>
          </div>
        </form>
      </div>
      <div className="pb-10">
        <PersonalImage />
      </div>
    </div>
  );
};

export default Contact;
