import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assests/images/Logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    let timeoutId = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        if (window.innerWidth >= 768) {
            clearTimeout(timeoutId.current);
            setIsDropdownOpen(true); // Opens dropdown on hover (only on desktop)
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 768) {
            timeoutId.current = setTimeout(() => {
                setIsDropdownOpen(false); // Closes dropdown after a slight delay on desktop
            }, 200);
        }
    };

    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false); // Close the menu on mobile after any link is clicked
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white sticky top-0 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src={Logo} className="h-10" alt="KAVIPRIYA ASSOCIATES Logo" />
                    <span className="text-purple-800 text-2xl font-bold">KAVIPRIYA ASSOCIATES</span>
                </Link>

                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-purple-800 rounded-md hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 ease-in-out`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-purple-800 font-medium">
                        <li>
                            <Link to="/" className="block px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white transition duration-200" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>

                        {/* Dropdown */}
                        <li
                            className="relative group"
                            ref={dropdownRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                onClick={toggleDropdown} // Toggle dropdown on click in mobile view
                                className="w-full md:w-auto flex items-center justify-between px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white transition duration-200"
                            >
                                Our Services
                                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 10 6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`absolute w-64 mt-2 bg-white rounded-md shadow-md z-50 transition-all duration-300 origin-top transform ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                                <ul className="text-sm text-purple-800 py-2">
                                    {[ 
                                        { id: 1, name: 'Start-Ups & MSME Subsidy' },
                                        { id: 2, name: 'Goods and Service Tax' },
                                        { id: 3, name: 'Income Tax – Salary, Company, TDS etc.' },
                                        { id: 4, name: 'Book Keeping' },
                                        { id: 5, name: 'Foreign Trade Management – DGFT' },
                                        { id: 6, name: 'Customs Clearance & MOOWR' },
                                        { id: 7, name: 'Health, Wealth and Marine Insurance' },
                                        { id: 8, name: 'Other Statutory Requirements' }
                                    ].map(service => (
                                        <li key={service.id}>
                                            <Link
                                                to={`/services/${service.id}`}
                                                className="block px-4 py-2 hover:bg-purple-100"
                                                onClick={handleLinkClick} // Close menu after selection
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link to="/about" className="block px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white transition duration-200" onClick={handleLinkClick}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white transition duration-200" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>

                        {/* Contact Info */}
                        <li className="mt-2 md:mt-0 md:ml-6 flex flex-col md:flex-row md:items-center text-sm text-purple-800 px-4 py-2">
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline mb-2 md:mb-0 md:mr-4"
                            >
                                📞 +91 98765 43210
                            </a>
                            <a
                                href="mailto:info@kavipriyaassociates.com"
                                className="hover:underline"
                            >
                                ✉️ info@kavipriyaassociates.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
