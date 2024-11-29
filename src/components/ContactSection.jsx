import React from "react";
import PhoneIcon from "../assets/icons/phone.svg";
import MailIcon from "../assets/icons/mail.svg";
import LocationIcon from "../assets/icons/location.svg";

const ContactUs = () => {
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
          Prêt à démarrer votre prochain projet ? Contactez-nous pour en discuter.
        </p>
      </div>

      {/* Cartes de contact */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
  {/* Carte 1 : Contactez-nous */}
  <div className="bg-white shadow-lg rounded-3xl p-6 flex items-center gap-4 w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 h-auto md:h-32">
    <div
      className="p-4 rounded-full flex items-center justify-center"
      style={{ width: "60px", height: "60px" }}
    >
      <img
        src={PhoneIcon}
        alt="Phone Icon"
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
        Contactez-nous
      </h4>
      <p className="text-gray-500">01 20 30 40 50</p>
    </div>
  </div>

  {/* Carte 2 : Envoyez-nous un e-mail */}
  <div className="bg-white shadow-lg rounded-3xl p-6 flex items-center gap-4 w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 h-auto md:h-32">
    <div
      className="p-4 rounded-full flex items-center justify-center"
      style={{ width: "60px", height: "60px" }}
    >
      <img
        src={MailIcon}
        alt="Mail Icon"
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
        Envoyez-nous un email
      </h4>
      <p className="text-gray-500">starsalign@studio.io</p>
    </div>
  </div>

  {/* Carte 3 : Notre emplacement */}
  <div className="bg-white shadow-lg rounded-3xl p-6 flex items-center gap-4 w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 h-auto md:h-32">
    <div
      className="p-4 rounded-full flex items-center justify-center"
      style={{ width: "60px", height: "60px" }}
    >
      <img
        src={LocationIcon}
        alt="Location Icon"
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
        Notre emplacement
      </h4>
      <p className="text-gray-500">12 rue Verdun, Paris, 75017</p>
    </div>
  </div>

      </div>
    </section>
  );
};

export default ContactUs;
