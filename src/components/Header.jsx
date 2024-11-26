import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md font-montserrat">
      {/* Logo */}
      <div className="text-lg font-bold">
        <h2>Logo</h2>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#services"
              className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* CTA */}
        <div>
          <div
            className="p-[2px] rounded-full inline-block"
            style={{
              border: "1px solid green", // Je vais fix ça plus tard, le J.
            }}
          >
            <button className="px-6 py-2 text-lg font-medium text-[#1F4037] bg-transparent rounded-full transition-all duration-300 hover:bg-gradient-to-tl hover:from-[#99F2C8] hover:to-[#1F4037] hover:text-white">
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
