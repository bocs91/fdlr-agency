import React from "react";
import TwitterIcon from "../assets/icons/Twitter.svg";
import FacebookIcon from "../assets/icons/Facebook.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import LinkedInIcon from "../assets/icons/LinkedIn.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      {/* Container pour le footer */}
      <div className="container mx-auto py-6 px-4">
        {/* Barre fine de séparation au-dessus de tout le contenu (texte et icônes) */}
        <div
          className="w-full max-w-4xl mx-auto mb-6"
          style={{
            height: "2px",
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
          }}
        ></div>

        {/* Bas du footer avec texte à gauche et icônes à droite */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright à gauche */}
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; 2024 Tous Droits Réservés
          </p>

          {/* Icônes réseaux sociaux à droite */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-[2px] rounded-full transition-transform duration-300 group"
              style={{
                background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              }}
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
              href="#"
              className="p-[2px] rounded-full transition-transform duration-300 group"
              style={{
                background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              }}
            >
              <div className="bg-white rounded-full p-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1F4037]">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="h-5 w-5 transition-all duration-300 group-hover:brightness-150 group-hover:invert"
                />
              </div>
            </a>
            <a
              href="#"
              className="p-[2px] rounded-full transition-transform duration-300 group"
              style={{
                background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              }}
            >
              <div className="bg-white rounded-full p-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1F4037]">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="h-5 w-5 transition-all duration-300 group-hover:brightness-150 group-hover:invert"
                />
              </div>
            </a>
            <a
              href="#"
              className="p-[2px] rounded-full transition-transform duration-300 group"
              style={{
                background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              }}
            >
              <div className="bg-white rounded-full p-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1F4037]">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="h-5 w-5 transition-all duration-300 group-hover:brightness-150 group-hover:invert"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
