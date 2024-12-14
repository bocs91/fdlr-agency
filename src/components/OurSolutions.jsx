  import React, { useState } from "react";
  import { motion } from "motion/react";

  // Charger dynamiquement tous les fichiers SVG dans un objet
  const icons = import.meta.glob("../assets/icons/**/*.svg", { eager: true });

  const OurSolutions = () => {
    const solutions = [
      {
        id: 1,
        title: "Développement Web & Applications",
        description:
          "Des solutions robustes et modernes pour booster votre présence digitale.",
        icon: "code.svg",
        points: [
          "Sites vitrines performants",
          "Applications web évolutives",
          "PWA (Progressive Web Apps)",
          "Intégration d'API complexes",
          "Performance et SEO optimisés",
          "Maintenance et évolutivité",
        ],
        advantages: ["Code maintenable", "Performance garantie"],
        tools: [
          "../devicons/javascript/javascript.svg",
          "../devicons/php/php.svg",
          "../devicons/java/java.svg",
          "../devicons/python/python.svg",
        ],
      },
      {
        id: 2,
        title: "Développement Mobile",
        description:
          "Applications mobiles natives ou hybrides pour connecter vos utilisateurs.",
        icon: "mobile.svg",
        points: [
          "Applications Android & iOS",
          "Développement avec Flutter et React Native",
          "UI/UX mobile innovant",
          "Performance et optimisation",
          "Intégration de fonctionnalités avancées (géolocalisation, notifications)",
          "Tests et déploiement sur stores",
        ],
        advantages: ["Expérience fluide", "Accessibilité accrue"],
        tools: [
          "../devicons/others/android.svg",
          "../devicons/others/ios.svg",
          "../devicons/javascript/react.svg",
          "../devicons/javascript/flutter2.svg",
        ],
      },
      {
        id: 3,
        title: "Solutions SaaS sur-mesure",
        description:
          "Déployez des plateformes cloud puissantes, prêtes à répondre à vos besoins métiers.",
        icon: "cloud.svg",
        points: [
          "Architecture multi-tenant",
          "Plateformes cloud sécurisées",
          "Back-end extensible",
          "Tableaux de bord personnalisés",
          "Gestion des utilisateurs avancée",
          "Monitoring et analyse des données",
        ],
        advantages: ["Flexibilité", "Haut niveau de sécurité"],
        tools: [
          "../devicons/cloud/aws.svg",
          "../devicons/cloud/googlecloud.svg",
          "../devicons/tools/docker.svg",
          "../devicons/tools/kubernetes.svg",
        ],
      },
      {
        id: 4,
        title: "Conception UI/UX",
        description:
          "Des interfaces modernes et intuitives qui captivent vos utilisateurs.",
        icon: "design.svg",
        points: [
          "Conception intuitive et innovante",
          "Expérience utilisateur fluide",
          "Tests utilisateurs avancés",
          "Wireframes et prototypes dynamiques",
          "Conception mobile-first",
          "Livrables prêts pour le développement",
        ],
        advantages: ["Interfaces attractives", "Meilleure rétention utilisateur"],
        tools: [
          "../devicons/others/figma.svg",
          "../devicons/others/xd.svg",
          "../devicons/others/sketch.svg",
        ],
      },
      {
        id: 5,
        title: "Optimisation des Performances",
        description:
          "Boostez la vitesse et la scalabilité de vos applications grâce à des optimisations avancées.",
        icon: "performance.svg",
        points: [
          "Audit des performances web",
          "Optimisation des temps de chargement",
          "Réduction de la consommation des ressources",
          "Mise en cache et CDN",
          "Minification et compression des fichiers",
          "Surveillance des performances en temps réel",
        ],
        advantages: ["Amélioration de l'expérience utilisateur", "Meilleure conversion"],
        tools: [
          "../devicons/tools/lighthouse.svg",
          "../devicons/tools/webpack.svg",
          "../devicons/tools/redis.svg",
          "../devicons/tools/cloudflare.svg",
        ],
      },
      {
        id: 6,
        title: "Cybersécurité avancée",
        description:
          "Protégez vos données et systèmes contre les menaces actuelles et futures.",
        icon: "cybersecurity.svg",
        points: [
          "Audit de sécurité approfondi",
          "Détection des menaces en temps réel",
          "Protection contre les ransomwares",
          "Mise en conformité RGPD et ISO 27001",
          "Sécurisation des systèmes d'information",
          "Analyse des vulnérabilités réseau",
        ],
        advantages: ["Protection totale", "Conformité réglementaire"],
        tools: [
          "../devicons/tools/wireshark2.svg",
          "../devicons/tools/nmap.svg",
          "../devicons/tools/security.svg",
        ],
      },
      {
        id: 7,
        title: "Gestion de projets digitaux",
        description:
          "Assurez le succès de vos projets grâce à une méthodologie agile et efficace.",
        icon: "project.svg",
        points: [
          "Gestion de projets agile (Scrum, Kanban)",
          "Planification détaillée",
          "Suivi des tâches en temps réel",
          "Coordination inter-équipes",
          "Livraison dans les délais",
          "Support et maintenance continue",
        ],
        advantages: ["Organisation optimale", "Collaboration renforcée"],
        tools: [
          "../devicons/tools/jira.svg",
          "../devicons/tools/trello.svg",
          "../devicons/tools/slack.svg",
        ],
      },
      {
        id: 8,
        title: "Solutions 3D et Réalité Virtuelle",
        description:
          "Donnez vie à vos projets avec des expériences immersives et réalistes.",
        icon: "3D.svg",
        points: [
          "Modélisation 3D haut de gamme",
          "Conception d'environnements VR",
          "Visualisations architecturales",
          "Intégration 3D dans vos applications",
          "Animations réalistes et interactives",
          "Compatibilité multi-plateformes",
        ],
        advantages: ["Immersion totale", "Technologie de pointe"],
        tools: [
          "../devicons/others/blender.svg",
          "../devicons/others/unity.svg",
          "../devicons/others/vr.svg",
        ],
      },
    ];
    
    

    const [currentSolution, setCurrentSolution] = useState(solutions[0]);

    return (
      <section id="services" className="bg-gray-50 py-16 px-4 sm:px-8">
  <header className="text-center mb-8">
    <div
      style={{
        display: "inline-block",
        background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      <h2 className="font-inter text-3xl sm:text-4xl font-light">Nos Solutions</h2>
    </div>
    <div
      className="mx-auto mt-4 mb-6 h-[2px] w-60"
      style={{
        background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
      }}
    ></div>
    <p className="text-sm sm:text-base text-gray-600">
      Découvrez nos services spécialisés pour répondre à tous vos besoins digitaux.
    </p>
  </header>

    
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Navigation à gauche */}
          <aside
            className="lg:w-1/3 flex flex-col items-start border-r border-gray-200 pr-8"
            aria-label="Navigation des solutions"
          >
            <div className="relative flex items-center">
              {/* Barre verticale */}
              <div className="relative h-[calc(95%-0.1rem)] w-2 bg-gray-200 rounded-full mr-4">
                {/* Progression dynamique */}
                <div
                  className="absolute top-0 w-full bg-[#1F4037] rounded-full transition-all duration-300"
                  style={{
                    height: `${
                      ((currentSolution.id - 1) / (solutions.length - 1)) * 100
                    }%`,
                  }}
                ></div>
                {/* Numérotation dynamique */}
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
    
              {/* Liste des solutions */}
              <nav aria-label="Liste des solutions">
                <ul className="space-y-4">
                  {solutions.map((solution) => (
                    <li
                      key={solution.id}
                      onClick={() => setCurrentSolution(solution)}
                      className={`font-lato px-4 py-3 cursor-pointer ${
                        currentSolution.id === solution.id
                          ? "bg-[#1F4037] text-white rounded-full"
                          : "text-gray-800 hover:text-[#1F4037]"
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) =>
                        e.key === "Enter" && setCurrentSolution(solution)
                      }
                    >
                      {solution.title}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
    
          {/* Contenu à droite */}
          <motion.article
    key={currentSolution.id}
    className="lg:w-2/3 flex flex-col items-start mt-8 lg:mt-0 lg:pl-8"
    aria-labelledby={`solution-title-${currentSolution.id}`}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
      className="bg-white border rounded-lg shadow-lg p-6 w-full flex flex-col justify-between"
      style={{
        height: "500px", 
        overflow: "hidden",
      }}
    >
      {/* En-tête de la solution */}
      <header className="flex items-center mb-4">
        <div
          className="p-[2px] rounded-md"
          style={{
            background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
          }}
        >
          <div className="h-10 w-10 bg-white flex items-center justify-center rounded-md">
            <img
              src={
              `/icons/${currentSolution.icon}`?.default ||
                `/icons/${currentSolution.icon}`
              }
              alt={`Icône de ${currentSolution.title}`}
              className="h-6 w-6"
            />
          </div>
        </div>
        <div className="ml-4">
          <h2
            id={`solution-title-${currentSolution.id}`}
            className="font-inter text-xl font-bold text-[#1F4037]"
          >
            {currentSolution.title}
          </h2>
          <p className="font-montserrat text-gray-600 text-sm">
            {currentSolution.description}
          </p>
        </div>
      </header>

      {/* Points clés */}
      <section aria-labelledby={`points-title-${currentSolution.id}`}>
        <h3 id={`points-title-${currentSolution.id}`} className="sr-only">
          Points clés de {currentSolution.title}
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {currentSolution.points.map((point, index) => (
            <li key={index} className="flex items-start" role="listitem">
              <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-br from-[#99F2C8] to-[#1F4037]">
                ➜
              </span>
              <p className="text-gray-500 text-sm sm:text-base">{point}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Avantages */}
      <section aria-labelledby={`advantages-title-${currentSolution.id}`}>
        <h3
          id={`advantages-title-${currentSolution.id}`}
          className="font-inter text-base sm:text-lg font-semibold text-[#1F4037] mb-2 sm:mb-4"
        >
          Les Avantages
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {currentSolution.advantages.map((advantage, index) => (
            <motion.li
              key={index}
              whileHover={{
                background: [
                  "linear-gradient(to top left, #99F2C8, #1F4037)",
                  "linear-gradient(to top left, #1F4037, #99F2C8)",
                  "linear-gradient(to top left, #99F2C8, #1F4037)",
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
              role="listitem"
            >
              <div className="font-inter bg-white rounded-lg p-2 text-center text-sm sm:text-base text-gray-500">
                {advantage}
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Technologies utilisées */}
      <section aria-labelledby={`tools-title-${currentSolution.id}`}>
        <h3
          id={`tools-title-${currentSolution.id}`}
          className="font-inter text-base sm:text-lg font-semibold text-[#1F4037] mb-2 sm:mb-4"
        >
          Technologies utilisées
        </h3>
        <div className="flex flex-wrap gap-4">
          {currentSolution.tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center"
              role="img"
              aria-label={`Icône de la technologie ${tool.split("/").pop()}`}
            >
              <img
                src={`/icons/devicons/${tool}`}
                alt={`Icône de la technologie ${tool.split("/").pop()}`}
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </motion.article>




        </div>
        <div id="technologies" className="max-w-4xl mx-auto px-4 sm:px-8 pb-16 pt-32">
  <div className="bg-gradient-to-r from-[#1F4037]/90 to-[#99F2C8]/90 p-4 sm:p-8 rounded-3xl backdrop-blur-sm">
    <h2 className="font-inter text-lg sm:text-2xl font-medium text-white text-center mb-2 sm:mb-3">
      Votre projet est unique, et nos compétences le sont aussi
    </h2>
    <p className="font-montserrat text-white/90 text-xs sm:text-sm text-center mb-4 sm:mb-6 max-w-lg mx-auto">
      Contactez-nous pour discuter d'une solution sur-mesure, adaptée à vos besoins.
    </p>
    <div className="text-center">
      <a
        href="https://cal.com/fdlr-agency/30min?date=2024-12-24&month=2024-12"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors duration-300 border border-white/20 inline-block"
        aria-label="Réservez un appel pour discuter de votre projet"
      >
        Réservez un appel
      </a>
    </div>
  </div>
</div>

      </section>


    );
    
  };

  export default OurSolutions;
