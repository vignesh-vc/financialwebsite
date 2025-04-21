import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import serviceData from '../data/serviceData';

const ServicesSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4" data-aos="fade-right">
          Our Services
        </h2>
        <p className="text-gray-600" data-aos="fade-left">
          Explore the range of expert solutions we provide to businesses & individuals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {serviceData.slice(0, 6).map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            className="cursor-pointer bg-purple-50 border border-purple-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
          >
            <div className="text-4xl text-purple-700 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-purple-800">{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => navigate('/services')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          View All Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
