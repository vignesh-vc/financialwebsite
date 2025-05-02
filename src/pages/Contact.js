import React, { useEffect } from "react";
import Footer from "../components/Footer";
import contactbg from "../assests/images/contact.jpg";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../assests/lottie/contact.json";
import { FiMail, FiUser, FiMessageCircle, FiPhone } from "react-icons/fi";
import WhatsAppButton from "../components/WhatsAppButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Desktop */}
      <section
        className="hidden md:flex bg-fixed bg-center bg-cover h-[60vh] items-center justify-center relative"
        style={{
          backgroundImage: `url(${contactbg})`,
          filter: "brightness(70%)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <h1 className="text-purple-800 text-5xl font-extrabold z-10 backdrop-blur-sm px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
      </section>

      {/* Hero Section - Mobile and Tablet */}
      <section className="md:hidden bg-gradient-to-r from-blue-700 to-purple-700 py-10 text-center shadow-md">
        <h1 className="text-purple-800 text-4xl font-extrabold">Contact Us</h1>
      </section>

      {/* Main Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Lottie */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <Player
            autoplay
            loop
            src={contactAnimation}
            className="w-[250px] sm:w-[300px] md:w-[350px] h-auto"
          />
        </div>

        {/* Right - Contact Form */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <form className="backdrop-blur-lg bg-white/80 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 border border-blue-100 hover:shadow-blue-200 transition-all">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center">
              Get in Touch
            </h2>

            {/* Name */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <FiUser className="absolute top-11 left-3 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <FiMail className="absolute top-11 left-3 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
              <FiPhone className="absolute top-11 left-3 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Mobile Number"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <FiMessageCircle className="absolute top-11 left-3 text-gray-400" />
              <textarea
                className="w-full pl-10 pr-4 py-3 h-32 resize-none border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
};

export default Contact;
