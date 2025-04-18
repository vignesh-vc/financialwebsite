import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaIndustry, FaMoneyCheckAlt, FaFileInvoiceDollar,
  FaBookOpen, FaGlobe, FaWarehouse, FaHeartbeat, FaTasks
} from 'react-icons/fa';

const services = [
  { title: "Start-Ups & MSME Subsidy", icon: <FaIndustry /> },
  { title: "Goods and Service Tax (GST)", icon: <FaMoneyCheckAlt /> },
  { title: "Income Tax – Salary, Company, TDS etc.", icon: <FaFileInvoiceDollar /> },
  { title: "Book Keeping", icon: <FaBookOpen /> },
  { title: "Foreign Trade Management – DGFT", icon: <FaGlobe /> },
  { title: "Customs Clearance & Warehouse Licensing (MOOWR)", icon: <FaWarehouse /> },
  { title: "Health, Wealth and Marine Insurance Advisor", icon: <FaHeartbeat /> },
  { title: "Other Misc. in Statutory Requirements", icon: <FaTasks /> },
];

const ServicesSection = () => {
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
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
          >
            <div className="text-4xl text-purple-700 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-purple-800">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
