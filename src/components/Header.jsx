import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md font-montserrat">
      {/* Logo */}
      <div className="text-lg font-bold">
        <h2>Logo</h2>
      </div>

      {/* Burger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-800 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation (Hidden on mobile, visible on desktop) */}
      <nav className="hidden md:flex space-x-10">
        <a
          href="#services"
          className="relative text-gray-800 hover:text-[#1F4037] transition-colors duration-300 group"
        >
          <span className="mb-1 block">Services</span>
          <span
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#99F2C8] to-[#1F4037] transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          href="#technologies"
          className="relative text-gray-800 hover:text-[#1F4037] transition-colors duration-300 group"
        >
          <span className="mb-1 block">Technologies</span>
          <span
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#99F2C8] to-[#1F4037] transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          href="#projects"
          className="relative text-gray-800 hover:text-[#1F4037] transition-colors duration-300 group"
        >
          <span className="mb-1 block">Projets</span>
          <span
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#99F2C8] to-[#1F4037] transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          href="#contact"
          className="relative text-gray-800 hover:text-[#1F4037] transition-colors duration-300 group"
        >
          <span className="mb-1 block">Contact</span>
          <span
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#99F2C8] to-[#1F4037] transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
      </nav>

      {/* Mobile Menu (Visible only when the burger menu is open) */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-50 shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 px-6 py-6">
            <li>
              <a
                href="#services"
                className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* CTA */}
      <div className="hidden md:block">
        <div
          className="p-[2px] rounded-full inline-block"
          style={{
            background: "linear-gradient(to top left, #99F2C8, #1F4037)", // Contour dégradé
          }}
        >
          <button className="px-4 py-2 text-sm font-medium text-[#1F4037] bg-white rounded-full transition-all duration-300 hover:bg-gradient-to-tl hover:from-[#99F2C8] hover:to-[#1F4037] hover:text-white">
            Prendre un RDV
            <span
              className="ml-2 transform transition-transform duration-300"
              style={{
                fontWeight: "bold",
                color: "inherit",
              }}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
