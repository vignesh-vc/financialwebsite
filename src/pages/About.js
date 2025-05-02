import React, { useEffect } from 'react';
import teamImage from '../assests/images/tax1.jpg'; // Replace with your image path
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiBriefcase, FiShield } from 'react-icons/fi';
import { MdPublic, MdOutlineFolderSpecial } from 'react-icons/md';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Section */}
        <div data-aos="fade-right">
          <p className="text-sm text-black font-semibold uppercase mb-2">Welcome to Kavipriya Associates</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Trusted Partner in <span className="text-purple-800">Tax,</span> <span className="text-purple-800">Finance</span> & <span className="text-purple-800">Compliance</span>
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            At <strong>Kavipriya Associates</strong>, we are committed to being your reliable partner in navigating the complex world of <span className="text-blue-600 font-semibold">taxation</span>, <span className="text-blue-600 font-semibold">finance</span>, and <span className="text-blue-600 font-semibold">government compliance</span>. Based in Coimbatore, Tamil Nadu, our firm offers a comprehensive suite of services tailored for Startups, MSMEs, and Corporates across India.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our areas of expertise include <span className="text-purple-700 font-medium">GST filings</span>, <span className="text-purple-700 font-medium">Income Tax returns</span>, Import/Export licensing through DGFT, Customs clearance, Insurance advisory, and full statutory compliance support including PF, ESI, and Factory licensing.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            With a deep understanding of the Indian financial ecosystem and regulatory landscape, we help clients unlock growth opportunities and ensure legal compliance with confidence.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative w-full h-full flex justify-center items-center" data-aos="fade-left">
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px]">
            <img
              src={teamImage}
              alt="Team working"
              className="rounded-3xl shadow-xl w-full clip-custom-shape object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 via-blue-100 to-white rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
        {[
          {
            icon: <FiBriefcase className="text-4xl text-purple-700 mb-3" />,
            title: '25+ Years Experience',
            desc: 'Expertise across finance, tax, and compliance domains.',
          },
          {
            icon: <MdPublic className="text-4xl text-purple-700 mb-3" />,
            title: 'PAN India Clients',
            desc: 'Serving startups, MSMEs, and corporates across India.',
          },
          {
            icon: <MdOutlineFolderSpecial className="text-4xl text-purple-700 mb-3" />,
            title: 'DGFT & Customs Experts',
            desc: 'Specialized in import/export licensing and clearances.',
          },
          {
            icon: <FiShield className="text-4xl text-purple-700 mb-3" />,
            title: 'Secure & Compliant',
            desc: 'Fully compliant with Indian statutory and financial norms.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
