import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Contact from "./Contact";
import WhatsAppButton from "../components/WhatsAppButton";
import About from "./About";

function Home() {
  return (
    <>
    
      <HeroSection />
      <About/>
      <ServicesSection />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

export default Home;
