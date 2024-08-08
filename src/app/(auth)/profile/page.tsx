import ProfileSection from "@/components/profile/ProfileSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <Navbar />
      <ProfileSection />
      <Footer />
    </div>
  );
};

export default Profile;
