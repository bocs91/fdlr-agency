import React from "react";
import PhoneIcon from "../assets/icons/phone.svg"; // Icône téléphone
import MailIcon from "../assets/icons/mail.svg"; // Icône mail
import LocationIcon from "../assets/icons/location.svg"; // Icône localisation

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-light"
          style={{
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Réalisons vos idées ensemble 👇
        </h2>
        <div
          className="mx-auto mt-4 mb-6 h-[2px] w-40"
          style={{
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
          }}
        ></div>
        <p className="text-gray-500 text-lg">
          Prêt à démarrer votre prochain projet ? Contactez-nous pour en discuter.
        </p>
      </div>

      {/* Cartes de contact */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Carte 1 : Contactez-nous */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 w-80 h-28">
          <div className="p-4 bg-white rounded-full">
            <img src={PhoneIcon} alt="Phone Icon" className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <h4 className="text-lg font-medium text-[#1F4037]">Contactez-Nous</h4>
            <p className="text-gray-500">01737 8588 357</p>
          </div>
        </div>

        {/* Carte 2 : Envoyez-nous un e-mail */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 w-80 h-28">
          <div className="p-4 bg-white rounded-full">
            <img src={MailIcon} alt="Mail Icon" className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <h4 className="text-lg font-medium text-[#1F4037]">Envoyez-Nous Un E-Mail</h4>
            <p className="text-gray-500">design@hotmail.co.uk</p>
          </div>
        </div>

        {/* Carte 3 : Notre emplacement */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 w-80 h-28">
          <div className="p-4 bg-white rounded-full">
            <img
              src={LocationIcon}
              alt="Location Icon"
              className="w-8 h-8 text-white"
            />
          </div>
          <div className="text-left">
            <h4 className="text-lg font-medium text-[#1F4037]">Notre Emplacement</h4>
            <p className="text-gray-500">
              59 Great Tattenhams, Epsom, LoremIpsum, KT18 5RE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;