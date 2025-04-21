import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assests/images/Logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 pt-12 pb-6 px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:flex lg:items-center">
            <button onClick={() => navigate("/")} className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10" />
              <p className="text-white">KAVIPRIYA ASSOCIATES</p>
            </button>
          </div>

          <div className="lg:flex lg:items-center">
            <ul className="flex space-x-6">
              {/* Add your real social links if needed */}
              <li>
                <button onClick={() => navigate("/")} className="hover:fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 w-7 h-7" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                  </svg>
                </button>
              </li>
              {/* Repeat for other social icons or external links */}
            </ul>
          </div>

          <div>
            <h4 className="text-am mb-6 text-white">Useful links</h4>
            <ul className="space-y-4 pl-2">
              <li><button onClick={() => navigate("/about")} className="text-gray-400 hover:text-white text-sm">About Us</button></li>
              <li><button onClick={() => navigate("/services")} className="text-gray-400 hover:text-white text-sm">Services</button></li>
              <li><button onClick={() => navigate("/contact")} className="text-gray-400 hover:text-white text-sm">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-am mb-6 text-white">Information</h4>
            <ul className="space-y-4 pl-2">
              <li><button onClick={() => navigate("/about")} className="text-gray-400 hover:text-white text-sm">About Us</button></li>
              <li><button onClick={() => navigate("/terms")} className="text-gray-400 hover:text-white text-sm">Terms & Conditions</button></li>
              <li><button onClick={() => navigate("/privacy")} className="text-gray-400 hover:text-white text-sm">Privacy Policy</button></li>
              <li><button onClick={() => navigate("/sale")} className="text-gray-400 hover:text-white text-sm">Sale</button></li>
              <li><button onClick={() => navigate("/docs")} className="text-gray-400 hover:text-white text-sm">Documentation</button></li>
            </ul>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-10">© 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
