import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center h-screen text-center bg-gradient-to-b from-gray-100 to-gray-200 px-4 overflow-hidden">
      {/* Blur vert autour avec animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Zone de flou 1 : en haut à gauche */}
        <motion.div
          className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-br from-[#99F2C8] to-[#1F4037] opacity-30 blur-3xl"
          animate={{
            x: ["-20%", "50%", "20%", "-30%"],
            y: ["-20%", "-10%", "30%", "20%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "-20%",
            left: "-10%",
          }}
        ></motion.div>

        {/* Zone de flou 2 : en bas à droite */}
        <motion.div
          className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-br from-[#99F2C8] to-[#1F4037] opacity-30 blur-3xl"
          animate={{
            x: ["10%", "-50%", "-20%", "30%"],
            y: ["20%", "10%", "-30%", "-20%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            bottom: "-20%",
            right: "-10%",
          }}
        ></motion.div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl px-4">
        {/* Titre principal */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold font-inter text-gray-800 leading-tight relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Solutions Professionnelles
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-tl from-[#99F2C8] to-[#1F4037]">
              Adaptées À Vos
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Besoins Et Objectifs
          </motion.div>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 font-montserrat"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          Solutions professionnelles adaptées à vos <br className="hidden sm:block" />{" "}
          besoins et objectifs
        </motion.p>

        {/* Bouton avec fond dégradé */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "backOut" }}
        >
          {/* Conteneur externe pour gérer les bordures dégradées */}
          <motion.div
            className="rounded-full inline-block p-[2px]"
            style={{
              background: "linear-gradient(to top left, #99F2C8, #1F4037)", // Contour dégradé
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 4px 20px rgba(0, 128, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Fond gris pour masquer */}
            <motion.div
              className="bg-gray-200 rounded-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-[#1F4037] bg-transparent rounded-full transition-all duration-300 hover:bg-gradient-to-tl hover:from-[#99F2C8] hover:to-[#1F4037] hover:text-white">
                Commencez
                <motion.span
                  className="ml-2"
                  style={{
                    fontWeight: "bold",
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
