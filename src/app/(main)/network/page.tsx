import NetworkSection from "@/components/network/NetworkSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

type Props = {};

const Network = (props: Props) => {
  return (
    <div>
      <Navbar />
      <NetworkSection />
      <Footer />
    </div>
  );
};

export default Network;
