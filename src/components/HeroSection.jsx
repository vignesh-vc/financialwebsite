import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImg from '../assests/images/tax1.jpg';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${HeroImg})` }} // replace with your image if needed
    >
      <div className="bg-black/40 absolute inset-0 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">
          Kavipriya Associates
        </h1>
        <p className="text-xl md:text-2xl mb-8" data-aos="fade-up">
          Trusted Partner in Tax, Finance, & Compliance
        </p>
        <div data-aos="zoom-in">
          <a
            href="/contact"
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg text-lg transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
