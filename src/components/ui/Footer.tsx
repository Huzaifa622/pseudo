"use client";
import Image from "next/image";
import React, { useState } from "react";
import ScoialIcons from "./ScoialIcons";
import Input from "./Input";

type Props = {};

const Footer = (props: Props) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    radio: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="pt-12">
      <div className="bg-footer  bg-cover bg-no-repeat flex justify-between items-center   p-12">
        <div className="p-14 flex flex-col gap-24">
          <Image
            src={"/assets/logo2.png"}
            alt="logo2"
            width={379}
            height={67.58}
          />
          <div>
            <ScoialIcons />
          </div>
        </div>
        <div className="text-[#02214F]">
          <ul className="flex flex-col gap-5">
            <li>Pricing</li>
            <li>Terms and conditions</li>
            <li>Impressum</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="w-[30%] ">
          <form className="">
            <div className=" flex flex-col justify-center items-start md:items-stretch">
              <div className="mb-2 flex gap-4">
                <Input
                  label="First Name"
                  type="text"
                  required
                  width="w-full"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />

                <Input
                  type="text"
                  required
                  width="w-full"
                  label="Last Name"
                  value={formData.lname}
                  name="lname"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2 ">
                <Input
                  type="text"
                  required
                  label="Email"
                  name="email"
                  value={formData.email}
                  width="w-full"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <Input
                  label="Message"
                  type="text"
                  name="message"
                  width="w-[300px] md:w-full"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white w-[214px] py-3 text-center rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
