"use client";

import React, { useState } from "react";

const NavBar = ({ index }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBarElements = [
    { name: "Apply for new Passport", href: "/applicationPage" },
    { name: "Check Appointment Availability", href: "/appointmentPage" },
    { name: "Track Application Status", href: "/trackApplicationPage" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:px-5 px-4 bg-white flex flex-wrap items-center py-2 border-b-[1px] border-black">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-gray-900">
          Decentra
        </a>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="md:hidden block focus:outline-none"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4L12 12M12 4L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4H14M2 8H14M2 12H14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen
            ? "max-h-[300px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-10"
        } transition-all duration-500 ease-in-out transform md:flex md:items-center md:w-auto w-full overflow-hidden md:max-h-none md:opacity-100 md:translate-y-0 md:transition-none`}
        id="menu"
      >
        <ul className="md:flex items-center justify-start text-base text-gray-700 pt-2 md:pt-0 w-full">
          {navBarElements.map((element, idx) => (
            <li
              key={idx}
              className={`${
                isMenuOpen
                  ? "border-[1px] border-gray-800 m-2 shadow-md"
                  : "border-r-[1px] border-gray-800"
              } flex justify-center items-center text-center ${
                idx === 0 ? "border-l-[1px] border-gray-800" : ""
              }
              
              `}
            >
              <a
                className={`block py-3 px-4 hover:text-blue-700 ${
                  index === idx ? "text-blue-700 underline-offset-[5px] underline" : ""
                }`}
                href={element.href}
              >
                {element.name}
              </a>
            </li>
          ))}
          {/* Button in line with nav items */}
          <li className="md:flex md:items-center flex justify-center w-full md:w-auto mt-2 md:mt-0">
            <a
              className="bg-transparent hover:bg-blue-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded md:ml-4"
              href="/login"
            >
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
