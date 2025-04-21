import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Contact from "./Contact";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
    
      <HeroSection />
      <ServicesSection />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

export default Home;
