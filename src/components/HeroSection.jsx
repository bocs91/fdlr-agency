import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center h-screen text-center bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Blur vert autour */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#99F2C8] to-[#1F4037] opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#99F2C8] to-[#1F4037] opacity-30 blur-3xl"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl px-4">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl font-bold font-inter text-gray-800 leading-tight relative">
          <span className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-gradient-to-br from-[#99F2C8] to-[#1F4037] opacity-20 blur-3xl"></span>
          Solutions Professionnelles <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-tl from-[#99F2C8] to-[#1F4037]">
            Adaptées À Vos
          </span>{" "}
          <br />
          Besoins Et Objectifs
        </h1>

        {/* Sous-titre */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 font-montserrat">
          Solutions professionnelles adaptées à vos <br /> besoins et objectifs
        </p>

        {/* Trait horizontal dégradé */}
        <div className="mt-8 flex justify-center">
          {/* Conteneur externe pour gérer les bordures dégradées */}
          <div
            className="rounded-full p-[2px] inline-block"
            style={{
              border: "1px solid green", // J'ai fait ça temporairement pour gérer la bordure
            }}
          >
            {/* Bouton interne avec fond transparent */}
            <div className="bg-transparent rounded-full">
              <button className="px-8 py-4 text-lg font-medium text-[#1F4037] bg-transparent rounded-full transition-all duration-300 hover:bg-gradient-to-tl hover:from-[#99F2C8] hover:to-[#1F4037] hover:text-white">
                Commencez
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;