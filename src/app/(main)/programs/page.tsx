import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/programs/Hero";
import ProgramSection from "@/components/programs/ProgramSection";
import React from "react";

type Props = {};

const Universities = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProgramSection />
      <Footer />
    </div>
  );
};

export default Universities;
