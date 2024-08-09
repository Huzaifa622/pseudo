import AISection from "@/components/program-ai/AISection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

type Props = {};

const ProgramAI = (props: Props) => {
  return (
    <div>
      <Navbar />
      <AISection />
      <Footer />
    </div>
  );
};

export default ProgramAI;
