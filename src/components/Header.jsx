import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md font-montserrat">
      {/* Logo */}
      <div className="text-lg font-bold">
        <a href="/" aria-label="Retour à la page d'accueil">
          <h1>FDLR Agency</h1>
        </a>
      </div>

      <nav
        className="hidden md:flex space-x-10"
        aria-label="Navigation principale"
      >
        {[
          { name: "Nos Services", href: "#services" },
          { name: "Expertise Digitale", href: "#technologies" },
          { name: "Portfolio", href: "#projects" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="relative text-gray-800 hover:text-[#1F4037] transition-colors duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Aller à ${item.name}`}
          >
            <span className="mb-1 block">{item.name}</span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#99F2C8] to-[#1F4037] transition-all duration-300 group-hover:w-full"
            ></span>
          </motion.a>
        ))}
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <motion.button
          className="p-2 text-gray-800 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.button>
      </div>

      {/* Menu Mobile animé */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-16 left-0 w-full bg-gray-50 shadow-lg md:hidden z-50"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col items-center space-y-4 px-6 py-6">
              {[
                { name: "Nos Services", href: "#services" },
                { name: "Expertise Digitale", href: "#technologies" },
                { name: "Portfolio", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-[#1F4037] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Aller à ${item.name}`}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Bouton CTA */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block p-[2px] rounded-full inline-block"
        style={{
          background: "linear-gradient(to top left, #99F2C8, #1F4037)", // Contour dégradé
        }}
      >
        <button
          className="px-4 py-2 text-sm font-medium text-[#1F4037] bg-white rounded-full transition-all duration-300 hover:bg-gradient-to-tl hover:from-[#99F2C8] hover:to-[#1F4037] hover:text-white"
          aria-label="Prendre un rendez-vous"
        >
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
      </motion.div>
    </header>
  );
};

export default Header;
