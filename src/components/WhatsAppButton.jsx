import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assests/lottie/whatsapp.json'; // ensure correct path

const WhatsAppButton = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <a
      href="https://wa.me/919080418650" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <div className="w-14 h-14 md:w-16 md:h-16">
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
