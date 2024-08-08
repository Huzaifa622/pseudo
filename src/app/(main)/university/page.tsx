import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/university/Hero";
import UniversitySection from "@/components/university/UniversitySection";
import React from "react";

type Props = {};

const University = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <UniversitySection />
      <Footer />
    </div>
  );
};

export default University;
