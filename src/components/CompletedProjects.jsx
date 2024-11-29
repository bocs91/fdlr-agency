import React, { useState } from "react";

const CompletedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Système de design (UI/UX)",
      description:
        "Conception de design terminée pour une marque internationale",
      tools: ["figma.svg", "xd.svg", "sketch.svg"],
      image: "/art.jpg",
      stats: [
        { label: "Performance", value: 90 },
        { label: "Satisfaction", value: 60 },
        { label: "Engagement", value: 95 },
      ],
    },
    {
      id: 2,
      title: "Architecture avancée",
      description: "Modélisation architecturale 3D pour un client prestigieux",
      tools: ["blender.svg", "unity.svg"],
      image: "/tech.jpg",
      stats: [
        { label: "Performance", value: 85 },
        { label: "Satisfaction", value: 75 },
        { label: "Engagement", value: 88 },
      ],
    },
  ];

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
<section id="projects" className="bg-gray-50 py-8 px-8">
  {/* Titre principal */}
  <div className="text-center mb-8">
    <div
      style={{
        display: "inline-block",
        background: "linear-gradient(to bottom right, #99F2C8, #1F4037)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      <h2 className="font-inter text-4xl font-light">Projets terminés</h2>
    </div>
    <div
      style={{
        margin: "0 auto",
        marginTop: "1.2rem",
        marginBottom: "1.5rem",
        height: "2px",
        width: "250px",
        background: "linear-gradient(to top left, #99F2C8, #1F4037)",
      }}
    ></div>
    <p className="text-lg text-gray-600">
      Découvrez nos dernières réalisations et laissez-vous inspirer par notre expertise.
    </p>
  </div>

  {/* Contenu principal */}
  <div className="flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-6 items-start max-w-7xl w-full">
    {/* Carte du projet */}
    <div className="bg-white border rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-inter text-2xl font-semibold text-gray-800 mb-2">
          {currentProject.title}
        </h3>
        <p className="font-montserrat text-gray-600 mb-4">
          {currentProject.description}
        </p>
        <div className="flex gap-4 mb-4">
          {currentProject.tools.map((tool, index) => (
            <img
              key={index}
              src={`/src/assets/icons/devicons/others/${tool}`}
              alt={tool}
              className="h-8 w-8"
            />
          ))}
        </div>
      </div>

      {/* Statistiques */}
      <div className="flex justify-between items-center gap-4 mt-4">
        {currentProject.stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24"
          >
            <div
              className="relative w-full h-full rounded-full"
              style={{
                background: `conic-gradient(#1F4037 ${stat.value}%, #E5E7EB 0%)`,
              }}
            >
              <div className="absolute inset-[2px] bg-white rounded-full flex items-center justify-center">
                <span className="text-sm lg:text-lg font-bold text-[#1F4037]">
                  {stat.value}%
                </span>
              </div>
            </div>
            <span className="mt-2 text-xs lg:text-sm text-gray-800">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Image du projet */}
    <div className="hidden lg:block">
      <img
        src={currentProject.image}
        alt={currentProject.title}
        className="rounded-xl w-full max-h-[300px] object-cover mx-auto"
      />
    </div>
  </div>
</div>

  {/* Navigation */}
  <div className="flex items-center justify-center mt-6">
    <div className="relative w-1/2 h-2 bg-gray-200 rounded-full">
      <div
        className="absolute top-0 left-0 h-2 bg-gradient-to-r from-[#99F2C8] to-[#1F4037] rounded-full transition-all duration-300"
        style={{
          width: `${
            ((currentProject.id - 1) / (projects.length - 1)) * 100
          }%`,
        }}
      ></div>
    </div>
  </div>

  {/* Counter and Navigation */}
  <div className="flex items-center justify-center mt-4 space-x-4">
    <button
      onClick={() =>
        setCurrentProject(
          projects[
            currentProject.id > 1 ? currentProject.id - 2 : projects.length - 1
          ]
        )
      }
      className="group p-2 rounded-full border border-gray-300 bg-white shadow transition-all duration-300 hover:scale-105 hover:bg-[#1F4037] hover:text-white active:scale-95 active:bg-[#1F4037] active:text-white"
    >
      <span className="text-[#1F4037] text-lg font-bold transition-all duration-300 group-hover:text-white">
        ←
      </span>
    </button>
    <span className="text-sm text-gray-600 font-montserrat">
      {String(currentProject.id).padStart(2, "0")} /{" "}
      {String(projects.length).padStart(2, "0")}
    </span>
    <button
      onClick={() =>
        setCurrentProject(
          projects[
            currentProject.id < projects.length ? currentProject.id : 0
          ]
        )
      }
      className="group p-2 rounded-full border border-gray-300 bg-white shadow transition-all duration-300 hover:scale-105 hover:bg-[#1F4037] hover:text-white active:scale-95 active:bg-[#1F4037] active:text-white"
    >
      <span className="text-[#1F4037] text-lg font-bold transition-all duration-300 group-hover:text-white">
        →
      </span>
    </button>
  </div>
</section>

  );
};

export default CompletedProjects;
