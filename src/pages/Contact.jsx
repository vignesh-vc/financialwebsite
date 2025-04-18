import React from "react";
import Footer from "../components/Footer";
import contactbg from "../assests/images/tax2.jpg";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../assests/lottie/contact.json";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-fixed bg-center bg-cover h-[60vh] flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${contactbg})`,
          filter: 'brightness(70%)', // Apply a brightness filter to darken the image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <h1 className="text-white text-5xl font-extrabold z-10 backdrop-blur-sm px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
      </section>

      {/* Main Section with Animation and Form */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Animation */}
        <div className="w-full md:w-1/2 flex justify-center animate-float">
          <Player
            autoplay
            loop
            src={contactAnimation}
            style={{ height: "400px", width: "400px" }}
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2">
          <form className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl p-10 space-y-6 border border-blue-100 transition-all hover:shadow-blue-200">
            <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">
              Get in Touch
            </h2>

            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <FiUser className="absolute top-12 left-3 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <FiMail className="absolute top-12 left-3 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <FiMessageCircle className="absolute top-12 left-3 text-gray-400" />
              <textarea
                className="w-full pl-10 border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
