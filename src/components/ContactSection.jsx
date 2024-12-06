  import React from "react";
  import { motion } from "motion/react";
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
        description: "fdlragency@gmail.com",
      },
      {
        icon: LocationIcon,
        title: "Notre emplacement",
        description: "Région Île de France, France",
      },
    ];

    return (
      <section id="contact" className="bg-gray-50 py-16 px-8">
        {/* Titre principal */}
        <header className="text-center mb-12">
  <h2
    className="text-4xl font-light inline-flex items-center justify-center"
    style={{
      background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    Donnez vie à vos ambitions digitales
    <span
      role="img"
      aria-label="Down Arrow"
      className="ml-2"
      style={{
        color: "initial", // Restaure la couleur naturelle
        background: "none", // Supprime le style de fond hérité
      }}
    >
      👇
    </span>
  </h2>
  <div
    className="mx-auto mt-4 mb-6 h-[2px] w-80"
    style={{
      background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
    }}
  ></div>
  <p className="text-gray-500 text-lg">
    Prêt à démarrer votre prochain projet ? Contactez-nous pour en discuter.
  </p>
</header>


        {/* Cartes de contact */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 flex items-center gap-4 w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 h-auto md:h-32 cursor-pointer transition-transform transform ease-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.1 }}
              aria-labelledby={`card-title-${index}`}
              role="region"
            >
              <div
                className="p-4 rounded-full flex items-center justify-center"
                style={{ width: "60px", height: "60px" }}
              >
                <img
                  src={card.icon}
                  alt={`Icône de ${card.title}`}
                  className="w-8 h-8 min-w-[32px] min-h-[32px] object-contain"
                />
              </div>
              <div className="text-left">
                <h3
                  id={`card-title-${index}`}
                  className="text-lg font-medium"
                  style={{
                    background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    );
  };

  export default ContactUs;



