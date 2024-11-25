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
        { label: "Performance", value: "90%" },
        { label: "Satisfaction", value: "60%" },
        { label: "Engagement", value: "95%" },
      ],
    },
    {
      id: 2,
      title: "Architecture avancée",
      description: "Modélisation architecturale 3D pour un client prestigieux",
      tools: ["blender.svg", "unity.svg"],
      image: "/tech.jpg",
      stats: [
        { label: "Performance", value: "85%" },
        { label: "Satisfaction", value: "75%" },
        { label: "Engagement", value: "88%" },
      ],
    },
    {
        id: 3   ,
        title: "Système de design (UI/UX)",
        description:
          "Conception de design terminée pour une marque internationale",
        tools: ["figma.svg", "xd.svg", "sketch.svg"],
        image: "/art.jpg",
        stats: [
          { label: "Performance", value: "90%" },
          { label: "Satisfaction", value: "60%" },
          { label: "Engagement", value: "95%" },
        ],
      },
      {
        id: 4,
        title: "Architecture avancée",
        description: "Modélisation architecturale 3D pour un client prestigieux",
        tools: ["blender.svg", "unity.svg"],
        image: "/tech.jpg",
        stats: [
          { label: "Performance", value: "85%" },
          { label: "Satisfaction", value: "75%" },
          { label: "Engagement", value: "88%" },
        ],
      },
  ];

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentProject(projects[prevIndex]);
  };

  return (
    <section className="bg-gray-50 py-16 px-8">
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
        <p style={{ fontSize: "1.125rem", color: "#6B7280" }}>
          Découvrez nos dernières réalisations et laissez-vous inspirer par
          notre expertise.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Carte du projet */}
        <div className="bg-white border rounded-lg shadow-lg p-6 w-full lg:w-1/2">
          <h3 className="font-inter text-2xl font-semibold text-gray-800 mb-2">
            {currentProject.title}
          </h3>
          <p className="font-montserrat text-gray-600 mb-4">
            {currentProject.description}
          </p>
          <div className="flex gap-4 mb-6">
            {currentProject.tools.map((tool, index) => (
              <img
                key={index}
                src={`/src/assets/icons/devicons/others/${tool}`}
                alt={tool}
                className="h-8 w-8"
              />
            ))}
          </div>
          {/* Statistiques */}
          {currentProject.stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between items-center border  p-4 rounded-lg mb-2"
              style={{
                border: "1px solid #1F4037",
              }}
            >
              <span className="font-inter text-gray-800">{stat.label}</span>
              <span className="font-inter text-[#1F4037]">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Image du projet */}
        <div className="lg:w-1/2">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="rounded-xl w-full max-h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-6">
  {/* Progress Bar Container */}
  <div className="relative w-1/2 h-2 bg-gray-200 rounded-full">
    {/* Progress Bar */}
    <div
      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-[#99F2C8] to-[#1F4037] rounded-full transition-all duration-300"
      style={{
        width: `${((currentProject.id - 1) / (projects.length - 1)) * 100}%`,
      }}
    ></div>
  </div>
</div>

{/* Counter and Navigation */}
<div className="flex items-center justify-center mt-4 space-x-4">
  {/* Previous Button */}
  <button
    onClick={() =>
      setCurrentProject(
        projects[
          currentProject.id > 1 ? currentProject.id - 2 : projects.length - 1
        ]
      )
    }
    className="p-2 rounded-full border border-gray-300 bg-white shadow transition-all duration-300 hover:scale-105 hover:bg-[#1F4037] hover:text-white active:scale-95 active:bg-[#1F4037] active:text-white"
  >
    <span className="text-[#1F4037] text-lg font-bold transition-all duration-300 hover:text-white">
      ←
    </span>
  </button>

  {/* Counter */}
  <span className="text-sm text-gray-600 font-montserrat">
    {String(currentProject.id).padStart(2, "0")} /{" "}
    {String(projects.length).padStart(2, "0")}
  </span>

  {/* Next Button */}
  <button
    onClick={() =>
      setCurrentProject(
        projects[
          currentProject.id < projects.length ? currentProject.id : 0
        ]
      )
    }
    className="p-2 rounded-full border border-gray-300 bg-white shadow transition-all duration-300 hover:scale-105 hover:bg-[#1F4037] hover:text-white active:scale-95 active:bg-[#1F4037] active:text-white"
  >
    <span className="text-[#1F4037] text-lg font-bold transition-all duration-300 hover:text-white">
      →
    </span>
  </button>
</div>



    </section>
  );
};

export default CompletedProjects;
