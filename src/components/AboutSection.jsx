import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative font-sans text-gray-800 bg-white overflow-hidden">
      {/* Top Parallax Background */}
      <div
        className="h-[70vh] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413')",
        }}
      >
        <div className="bg-black bg-opacity-60 w-full text-center px-4 py-16 text-white">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up"
          >
            About Our Journey
          </h1>
          <p
            className="text-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Building reliable digital solutions powered by creativity and cutting-edge technologies.
          </p>
        </div>
      </div>

      {/* Image + Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-gray-50">
        {/* Text Box */}
        <div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl transition duration-300 hover:shadow-blue-200 w-full md:w-1/2"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-4">
            We specialize in MERN, Python, and AI-based solutions that are clean, scalable, and secure. Our mission is to deliver value to startups, enterprises, and growing tech ecosystems.
          </p>
          <p className="text-gray-600">
            Every line of code is crafted to empower your digital presence with purpose and precision.
          </p>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8e5b17b1db"
            alt="About Us"
            className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* SVG Wave */}
      <div className="-mb-1">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutSection;
