import React, { useState } from "react";
import { motion } from "motion/react";
// Charger dynamiquement tous les fichiers SVG dans un objet
const icons = import.meta.glob("../assets/icons/**/*.svg", { eager: true });

const OurSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Le développement web",
      description:
        "Nous créons des sites web modernes et performants adaptés à vos utilisateurs.",
      icon: "code.svg",
      points: [
        "Développement front-end",
        "Développement back-end",
        "Conception responsive",
        "Intégration d'API",
        "Optimisation des performances",
        "Maintenance évolutive",
      ],
      advantages: ["Code optimisé", "Support technique continu"],
      tools: [
        "../devicons/javascript/react.svg",
        "../devicons/javascript/node.svg",
        "../devicons/tools/tailwind.svg",
      ],
    },
    {
      id: 2,
      title: "Les solutions SaaS",
      description:
        "Conception et déploiement de solutions SaaS adaptées à vos objectifs d'entreprise.",
      icon: "cloud.svg",
      points: [
        "Plateformes cloud sécurisées",
        "Applications multi-utilisateurs",
        "Systèmes de gestion centralisés",
        "Personnalisation avancée",
        "Scalabilité intégrée",
        "Analytique en temps réel",
      ],
      advantages: ["Évolutivité", "Sécurité renforcée"],
      tools: [
        "../devicons/cloud/aws.svg",
        "../devicons/tools/docker.svg",
        "../devicons/tools/kubernetes.svg",
      ],
    },
    {
      id: 3,
      title: "La conception UI/UX",
      description:
        "Des interfaces modernes et intuitives qui captivent vos utilisateurs.",
      icon: "design.svg",
      points: [
        "La conception de système",
        "La conception artistique",
        "La conception mobile",
        "Le prototypage",
        "Les modèles",
        "Les tests utilisateurs",
      ],
      advantages: ["La conception unique", "La conception optimisée"],
      tools: [
        "../devicons/others/figma.svg",
        "../devicons/others/xd.svg",
        "../devicons/others/blender.svg",
      ],
    },
    {
      id: 4,
      title: "La cybersécurité",
      description:
        "Protégez vos données et vos systèmes grâce à nos solutions avancées de cybersécurité.",
      icon: "cybersecurity.svg",
      points: [
        "Analyse des vulnérabilités",
        "Gestion des risques",
        "Sécurisation des réseaux",
        "Protection des données",
        "Surveillance en temps réel",
        "Plan de reprise après sinistre",
      ],
      advantages: ["Sécurité maximale", "Conformité réglementaire"],
      tools: [
        "../devicons/cloud/aws.svg",
        "../devicons/tools/kubernetes.svg",
        "../devicons/javascript/react.svg",
      ],
    },
    {
      id: 5,
      title: "La vidéo sur les réseaux sociaux",
      description:
        "Créez des vidéos engageantes pour maximiser votre impact sur les réseaux sociaux.",
      icon: "video.svg",
      points: [
        "Production vidéo",
        "Montage créatif",
        "Stratégie de contenu",
        "Optimisation des formats",
        "Analyse des performances",
        "Publicité vidéo",
      ],
      advantages: ["Engagement élevé", "Formats adaptés"],
      tools: ["../devicons/others/figma.svg", "../devicons/tools/tailwind.svg"],
    },
    {
      id: 6,
      title: "Le virtuel 3D",
      description:
        "Plongez dans l'avenir avec nos solutions immersives en 3D virtuelle.",
      icon: "3D.svg",
      points: [
        "Modélisation 3D",
        "Expériences VR",
        "Visualisation architecturale",
        "Intégration dans des applications",
        "Animation avancée",
        "Support multi-plateformes",
      ],
      advantages: ["Expérience immersive", "Technologies innovantes"],
      tools: [
        "../devicons/others/blender.svg",
        "../devicons/others/unity.svg",
        "../devicons/tools/tailwind.svg",
      ],
    },
  ];

  const [currentSolution, setCurrentSolution] = useState(solutions[0]);

  return (
    <>
      <section id="services" className="bg-gray-50 py-16 px-4 sm:px-8">
        <div className="text-center mb-8">
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <h2 className="font-inter text-3xl sm:text-4xl font-light">Nos solutions</h2>
          </div>
          <div
            className="mx-auto mt-4 mb-6 h-[2px] w-40"
            style={{
              background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
            }}
          ></div>
          <p className="text-sm sm:text-base text-gray-600">
            On vous propose des solutions professionnelles qui correspondent à vos
            besoins et à vos objectifs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/3 flex flex-col items-start border-r border-gray-200 pr-8 relative">
            <div className="relative flex items-center">
              <div className="relative h-96 w-2 bg-gray-200 rounded-full mr-4">
                <div
                  className="absolute top-0 w-full bg-[#1F4037] rounded-full transition-all duration-300"
                  style={{
                    height: `${(currentSolution.id / solutions.length) * 100}%`,
                  }}
                ></div>
                <div
                  className="absolute -bottom-14 -left-[6px] text-gray-500 font-medium text-xs sm:text-sm"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {String(currentSolution.id).padStart(2, "0")} /{" "}
                  {String(solutions.length).padStart(2, "0")}
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-4">
                {solutions.map((solution) => (
                  <li
                    key={solution.id}
                    onClick={() => {
                      setCurrentSolution(solution);
                    }}
                    className={`font-lato px-2 py-3 sm:py-4 cursor-pointer ${
                      currentSolution.id === solution.id
                        ? "bg-[#1F4037] text-white rounded-full"
                        : "text-gray-800 hover:text-[#1F4037]"
                    }`}
                  >
                    {solution.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Card de droite avec animation */}
          <motion.div
  key={currentSolution.id} // Change key to trigger re-render
  className="lg:w-2/3 flex flex-col items-start mt-8 sm:mt-12 lg:mt-0 lg:pl-8"
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
>
  <div className="bg-white border rounded-lg shadow-lg p-4 sm:p-6 w-full">
    <div className="flex items-center mb-4 sm:mb-6">
      <div
        className="p-[2px] rounded-md"
        style={{
          background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
        }}
      >
        <div className="h-10 w-10 bg-white flex items-center justify-center rounded-md">
          <img
            src={
              icons[`../assets/icons/${currentSolution.icon}`].default
            }
            alt={currentSolution.title}
            className="h-6 w-6 sm:h-8 sm:w-8"
          />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="font-inter text-lg sm:text-xl font-bold text-[#1F4037]">
          {currentSolution.title}
        </h3>
        <p className="font-montserrat text-gray-500 text-sm sm:text-base">
          {currentSolution.description}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
      {currentSolution.points.map((point, index) => (
        <div key={index} className="flex items-start">
          <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-br from-[#99F2C8] to-[#1F4037]">
            ➜
          </span>
          <p className="text-gray-500 text-sm sm:text-base">{point}</p>
        </div>
      ))}
    </div>

    {/* Avantages */}
    <h4 className="font-inter text-base sm:text-lg font-semibold text-[#1F4037] mb-2 sm:mb-4">
      Les Avantages
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
  {currentSolution.advantages.map((advantage, index) => (
    <motion.div
      key={index}
      whileHover={{
        background: [
          "linear-gradient(to top left, #99F2C8, #1F4037)",
          "linear-gradient(to top left, #1F4037, #99F2C8)",
          "linear-gradient(to top left, #99F2C8, #1F4037)"
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="p-[1px] rounded-lg"
      style={{
        background: "linear-gradient(to top left, #99F2C8, #1F4037)",
      }}
    >
      <div className="font-inter bg-white rounded-lg p-2 text-center text-sm sm:text-base text-gray-500">
        {advantage}
      </div>
    </motion.div>
  ))}
</div>


    {/* Technologies utilisées */}
    <h4 className="font-inter text-base sm:text-lg font-semibold text-[#1F4037] mb-2 sm:mb-4">
      Technologies utilisées
    </h4>
    <div className="flex flex-wrap gap-4">
  {currentSolution.tools.map((tool, index) => (
    <motion.div
      key={index}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-center"
    >
      <img
        src={`/src/assets/icons/devicons/${tool}`}
        alt="Technology Icon"
        className="h-8 w-8 sm:h-10 sm:w-10"
      />
    </motion.div>
  ))}
</div>

  </div>
</motion.div>

        </div>
      </section>
    </>
  );
  
  

};

export default OurSolutions;
