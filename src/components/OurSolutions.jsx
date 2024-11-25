import React, { useState } from "react";

// Charger dynamiquement tous les fichiers SVG dans un objet
const icons = import.meta.glob("../assets/icons/**/*.svg", { eager: true });

const OurSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Le développement web",
      description:
        "Nous construisons des sites web modernes et performants pour répondre aux besoins de vos utilisateurs.",
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
        "tools/docker.svg",
        "tools/kubernetes.svg",
        "javascript/react.svg",
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
  console.log(icons);
  const [currentSolution, setCurrentSolution] = useState(solutions[0]);

  return (
    <>
      <section className="bg-gray-50 py-16 px-8">
        <div className="text-center mb-8">
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <h2 className="font-inter text-4xl font-light">Nos solutions</h2>
          </div>
          <div
            style={{
              margin: "0 auto",
              marginTop: "1.2rem",
              marginBottom: "1.5rem",
              height: "2px",
              width: "250px",
              background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
            }}
          ></div>
          <p style={{ fontSize: "1.125rem", color: "#6B7280" }}>
            On vous propose des solutions professionnelles qui correspondent à
            vos besoins et à vos objectifs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/3 flex flex-col items-start border-r border-gray-200 pr-8 relative">
            <div className="relative flex items-center">
              <div className="relative h-64 w-2 bg-gray-200 rounded-full mr-4">
                <div
                  className="absolute top-0 w-full bg-[#1F4037] rounded-full transition-all duration-300"
                  style={{
                    height: `${(currentSolution.id / solutions.length) * 100}%`,
                  }}
                ></div>
                <div
                  className="absolute -bottom-16 -left-[6px] text-gray-500 font-medium text-sm"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {String(currentSolution.id).padStart(2, "0")} /{" "}
                  {String(solutions.length).padStart(2, "0")}
                </div>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution) => (
                  <li
                    key={solution.id}
                    onClick={() => setCurrentSolution(solution)}
                    className={`font-lato px-2 py-4 cursor-pointer ${
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
          <div className="lg:w-2/3 flex flex-col items-start mt-12 lg:mt-0 lg:pl-8">
            <div className="bg-white border rounded-lg shadow-lg p-6 w-full">
              <div className="flex items-center mb-6">
                <div
                  className="p-[2px] rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #99F2C8, #1F4037)",
                  }}
                >
                  <div className="h-12 w-12 bg-white flex items-center justify-center rounded-md">
                    <img
                      src={
                        icons[`../assets/icons/${currentSolution.icon}`].default
                      }
                      alt={currentSolution.title}
                      className="h-8 w-8"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-inter text-xl font-bold text-[#1F4037]">
                    {currentSolution.title}
                  </h3>
                  <p className="font-montserrat text-gray-500">
                    {currentSolution.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {currentSolution.points.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-br from-[#99F2C8] to-[#1F4037]">
                      ➜
                    </span>
                    <p className="text-gray-500">{point}</p>
                  </div>
                ))}
              </div>
              <h4 className="font-inter text-lg font-semibold text-[#1F4037] mb-4">
                Les Avantages
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {currentSolution.advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="p-[1px] rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top left, #99F2C8, #1F4037)",
                    }}
                  >
                    <div className="font-inter bg-white rounded-lg p-2 text-center text-gray-500">
                      {advantage}
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="font-inter text-lg font-semibold text-[#1F4037] mb-4">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-4">
                {currentSolution.tools.map((tool, index) => (
                  <div key={index}>
                    <img
                      src="/src/assets/icons/devicons/javascript/react.svg"
                      alt="React Icon"
                      className="h-10 w-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <div className="bg-gradient-to-r from-[#1F4037]/90 to-[#99F2C8]/90 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="font-inter text-2xl font-medium text-white text-center mb-3">
            Technologies maîtrisées
          </h2>
          <p className="font-montserrat text-white/90 text-sm text-center mb-6 max-w-lg mx-auto">
            Nos compétences couvrent un large éventail de technologies modernes
            pour répondre à tous vos besoins.
          </p>
          <div className="text-center">
            <button
              onClick={() =>
                alert("Réservation d'un appel bientôt disponible!")
              }
              className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              Réservez un appel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
