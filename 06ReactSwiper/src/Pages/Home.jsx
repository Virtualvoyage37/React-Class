import React from "react";
import HeroSection from "../Component/HeroSection";
import Navbar from "../Component/Layout/Navbar";
import SignUp from "./Auth/SignUp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SignUp />
    </div>
  );
};

export default Home;
