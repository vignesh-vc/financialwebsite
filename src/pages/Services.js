import React from 'react';
import serviceData from '../data/serviceData';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from "../components/WhatsAppButton";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">All Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviceData.map(service => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
};

export default Services;
