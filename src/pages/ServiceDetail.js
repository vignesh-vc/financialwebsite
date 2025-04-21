import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import serviceData from '../data/serviceData';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import WhatsAppButton from "../components/WhatsAppButton";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS for animations

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData.find(item => item.id === parseInt(id));

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  if (!service) return <p className="text-center mt-10">Service not found.</p>;

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md hover:bg-purple-200 transition-all"
        >
          <FaArrowLeft /> Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all"
        >
          <FaHome /> Home
        </button>
      </div>

      <h2 
        className="text-3xl font-bold text-purple-800 mb-4 flex items-center gap-3" 
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        <span className="text-4xl">{service.icon}</span> {service.title}
      </h2>

      {/* Display Content with Animation for each point */}
      <div className="space-y-6" data-aos="fade-up" data-aos-duration="1500">
        <p className="text-gray-700 text-lg mb-4">{service.content[0]}</p>
        {service.content.slice(1).map((point, index) => (
          <p key={index} className="text-gray-600 text-lg">
            <span className="text-purple-600 font-semibold">•</span> {point}
          </p>
        ))}
      </div>

      <div className="mt-12" data-aos="fade-up" data-aos-duration="2000">
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default ServiceDetail;
