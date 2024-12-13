import React from "react";
import { motion } from "motion/react";
import TwitterIcon from "../assets/icons/Twitter.svg";
import FacebookIcon from "../assets/icons/Facebook.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import LinkedInIcon from "../assets/icons/LinkedIn.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto py-6 px-4">
        {/* Barre de séparation */}
        <hr
          className="w-full max-w-4xl mx-auto mb-6"
          style={{
            height: "3px",
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
            border: "none",
          }}
        />

        {/* Structure principale du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright */}
          <div aria-label="Droits d'auteur">
            <p className="text-sm text-gray-600">
              &copy; 2024 - Tous droits réservés
            </p>
          </div>

          {/* Phrase centrée avec animation */}
          <motion.div
            aria-label="Phrase inspirationnelle"
            whileHover={{
              scale: 1.1,
              color: "#1F4037",
              transition: { duration: 0.5 },
            }}
          >
            <p className="text-sm text-gray-600 font-medium font-poppins">
              <span role="img" aria-label="star">
                ✨
              </span>{" "}
              Inspiré et développé par l'effervescence parisienne{" "}
              <span role="img" aria-label="night city">
                🌃
              </span>
            </p>
          </motion.div>

          {/* Réseaux sociaux */}
          <nav
            aria-label="Liens vers les réseaux sociaux"
            className="flex space-x-4"
          >
            <a
              href="https://x.com/FDLRAGENCY"
              aria-label="Twitter"
              className="p-[2px] rounded-full transition-transform duration-300 group"
              style={{
                background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-full p-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1F4037]">
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="h-5 w-5 transition-all duration-300 group-hover:brightness-150 group-hover:invert"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/fdlr-agency-b99338341/"
              aria-label="LinkedIn"
              className="p-[2px] rounded-full transition-transform duration-300 group"
              style={{
                background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-full p-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1F4037]">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="h-5 w-5 transition-all duration-300 group-hover:brightness-150 group-hover:invert"
                />
              </div>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
