import About1 from "@/components/Home/About1";
import About2 from "@/components/Home/About2";
import Companies from "@/components/Home/Companies";
import Herobanner from "@/components/Home/Herobanner";
import Teachers from "@/components/Home/Teachers";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-ubuntu">
      <Navbar />
      <Herobanner />
      <Companies />
      <Teachers />
      <About1 />
      <About2 />
    </div>
  );
}
