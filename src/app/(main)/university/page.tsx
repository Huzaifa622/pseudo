import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/universities/Hero";
import UniversitySection from "@/components/universities/UniversitySection";
import React from "react";

type Props = {};

const Universities = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <UniversitySection />
      <Footer />
    </div>
  );
};

export default Universities;
