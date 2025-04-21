import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from '../assests/lottie/whatsapp.json'; // path to your Lottie JSON file

const WhatsAppButton = () => {
  const defaultOptions = {
    loop: true, // Set to true for looping animation
    autoplay: true, // Set to true to autoplay animation
    animationData: animationData, // Import your Lottie JSON data here
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <a
      href="https://wa.me/919080418650" // replace with your number
      className="fixed bottom-6 right-6 z-50  hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Lottie animation */}
      <Lottie options={defaultOptions} height={50} width={50} />
    </a>
  );
};

export default WhatsAppButton;
