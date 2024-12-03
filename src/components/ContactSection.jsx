import React from "react";
import { motion, useInView } from "framer-motion"; // Importer motion et useInView
import PhoneIcon from "../assets/icons/phone.svg";
import MailIcon from "../assets/icons/mail.svg";
import LocationIcon from "../assets/icons/location.svg";

const ContactUs = () => {
  const cards = [
    {
      icon: PhoneIcon,
      title: "Contactez-nous",
      description: "01 20 30 40 50",
    },
    {
      icon: MailIcon,
      title: "Envoyez-nous un email",
      description: "starsalign@studio.io",
    },
    {
      icon: LocationIcon,
      title: "Notre emplacement",
      description: "12 rue Verdun, Paris, 75017",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-16 px-8">
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-light"
          style={{
            display: "inline-block",
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Réalisons vos idées ensemble{" "}
        </h2>
        <span role="img" aria-label="Down Arrow" className="text-4xl">
          👇
        </span>
        <div
          className="mx-auto mt-4 mb-6 h-[3px] w-64"
          style={{
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
          }}
        ></div>
        <p className="text-gray-500 text-lg">
          Prêt à démarrer votre prochain projet ? Contactez-nous pour en
          discuter.
        </p>
      </div>

      {/* Cartes de contact */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-6 flex items-center gap-4 w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 h-auto md:h-32 cursor-pointer transition-transform transform ease-out"
            whileHover={{
              scale: 1.05, // Légère augmentation au survol
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Ombre accentuée au survol
            }}
            initial={{ opacity: 0, y: 20 }} // Initialisation cachée en bas
            whileInView={{ opacity: 1, y: 0 }} // Animation d'apparition au scroll
            viewport={{ once: true, amount: 0.5 }} // Se déclenche lorsque l'élément est visible à 50%
            transition={{ duration: 0.1}}
          >
            <div
              className="p-4 rounded-full flex items-center justify-center"
              style={{ width: "60px", height: "60px" }}
            >
              <img
                src={card.icon}
                alt={`${card.title} Icon`}
                className="w-8 h-8 min-w-[32px] min-h-[32px] object-contain"
              />
            </div>
            <div className="text-left">
              <h4
                className="text-lg font-medium"
                style={{
                  background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {card.title}
              </h4>
              <p className="text-gray-500">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
