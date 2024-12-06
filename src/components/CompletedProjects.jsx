import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CompletedProjects = () => {
  const projects = [
    // Développement Web (6 projets)
    {
      id: 1,
      title: "Refonte d'un site e-commerce",
      description: "Migration vers une architecture moderne et optimisation SEO.",
      tools: ["javascript/react.svg", "javascript/nodejs.svg", "projects/mongodb.svg"],
      image: "/ecommerce.jpg",
      stats: [
        { label: "Performance", value: 92 },
        { label: "Satisfaction", value: 85 },
        { label: "Taux de conversion", value: 88 },
      ],
    },
    {
      id: 2,
      title: "Plateforme éducative en ligne",
      description: "Développement d'une plateforme pour cours en ligne interactifs.",
      tools: ["javascript/vue.svg", "tools/tailwind.svg", "cloud/firebase.svg"],
      image: "/education.jpg",
      stats: [
        { label: "Utilisateurs actifs", value: 90 },
        { label: "Satisfaction", value: 87 },
        { label: "Engagement", value: 93 },
      ],
    },
    {
      id: 3,
      title: "Site vitrine optimisé SEO",
      description: "Création d'un site vitrine performant pour une startup tech.",
      tools: ["javascript/nextjs.svg", "projects/graphql.svg", "projects/vercel.svg"],
      image: "/vitrine.jpg",
      stats: [
        { label: "Visibilité", value: 95 },
        { label: "Temps de chargement", value: 80 },
        { label: "Satisfaction client", value: 90 },
      ],
    },
    {
      id: 4,
      title: "Application de gestion d'événements",
      description: "Développement d'un tableau de bord pour la gestion d'événements.",
      tools: ["javascript/angular.svg", "projects/material.svg", "cloud/firebase.svg"],
      image: "/events.jpg",
      stats: [
        { label: "Utilisateurs actifs", value: 88 },
        { label: "Satisfaction", value: 85 },
        { label: "Engagement", value: 91 },
      ],
    },
    {
      id: 5,
      title: "Portail d'emploi régional",
      description: "Développement d'un site pour connecter employeurs et candidats.",
      tools: ["projects/django.svg", "projects/postgresql.svg", "tools/docker.svg"],
      image: "/job-portal.jpg",
      stats: [
        { label: "Visites", value: 85 },
        { label: "Satisfaction", value: 88 },
        { label: "Taux d'adoption", value: 90 },
      ],
    },
    {
      id: 6,
      title: "Portefeuille en ligne",
      description: "Création d'un portfolio interactif pour un designer professionnel.",
      tools: ["projects/gatsby.svg", "projects/contentful.svg", "projects/netlify.svg"],
      image: "/portfolio.jpg",
      stats: [
        { label: "Performance", value: 95 },
        { label: "Design", value: 98 },
        { label: "Engagement", value: 90 },
      ],
    },
  
    // Développement Mobile (2 projets)
    {
      id: 7,
      title: "Application de fitness",
      description: "Suivi personnalisé des entraînements et des objectifs de fitness.",
      tools: ["javascript/react.svg", "projects/expo.svg", "cloud/firebase.svg"],
      image: "/fitness.jpg",
      stats: [
        { label: "Engagement", value: 92 },
        { label: "Satisfaction", value: 85 },
        { label: "Utilisateurs actifs", value: 88 },
      ],
    },
    {
      id: 8,
      title: "App de réservation en temps réel",
      description: "Application mobile pour réserver des services instantanément.",
      tools: ["javascript/flutter2.svg", "projects/dart.svg", "projects/stripe.svg"],
      image: "/booking.jpg",
      stats: [
        { label: "Réservations", value: 90 },
        { label: "Temps de réponse", value: 80 },
        { label: "Taux de satisfaction", value: 85 },
      ],
    },
  
    // Solutions SaaS (4 projets)
    {
      id: 9,
      title: "CRM pour petites entreprises",
      description: "Gestion des clients et des ventes via une solution cloud.",
      tools: ["cloud/aws.svg", "tools/docker.svg", "projects/nodejs2.svg"],
      image: "/crm.jpg",
      stats: [
        { label: "Adoption", value: 88 },
        { label: "Fiabilité", value: 95 },
        { label: "Satisfaction", value: 90 },
      ],
    },
    {
      id: 10,
      title: "ERP sur mesure",
      description: "Solution ERP adaptée aux besoins spécifiques d'une entreprise.",
      tools: ["python/python.svg", "projects/postgresql.svg", "tools/kubernetes.svg"],
      image: "/erp.jpg",
      stats: [
        { label: "Productivité", value: 85 },
        { label: "Adoption", value: 90 },
        { label: "Satisfaction", value: 92 },
      ],
    },
    {
      id: 11,
      title: "Tableau de bord analytique",
      description: "Visualisation des données pour une prise de décision éclairée.",
      tools: ["projects/powerbi.svg", "projects/tableau.svg", "projects/sql.svg"],
      image: "/analytics.jpg",
      stats: [
        { label: "Fiabilité", value: 95 },
        { label: "Utilisabilité", value: 90 },
        { label: "Précision", value: 93 },
      ],
    },
    {
      id: 12,
      title: "SaaS pour la gestion des stocks",
      description: "Solution cloud pour suivre et gérer les stocks en temps réel.",
      tools: ["php/laravel.svg", "javascript/vue.svg", "tools/docker.svg"],
      image: "/inventory.jpg",
      stats: [
        { label: "Précision", value: 92 },
        { label: "Fiabilité", value: 85 },
        { label: "Satisfaction", value: 90 },
      ],
    },
  
    // Autres projets (UI/UX, Cybersécurité, etc.)
    {
      id: 13,
      title: "Système de design",
      description: "Création d'une bibliothèque de composants UI.",
      tools: ["others/figma.svg", "others/sketch.svg", "others/xd.svg"],
      image: "/design.jpg",
      stats: [
        { label: "Cohérence", value: 95 },
        { label: "Adoption", value: 85 },
        { label: "Design", value: 90 },
      ],
    },
    {
      id: 14,
      title: "Optimisation des performances",
      description: "Réduction des temps de chargement d'une application web.",
      tools: ["tools/webpack.svg", "tools/redis.svg", "projects/nginx.svg"],
      image: "/performance.jpg",
      stats: [
        { label: "Performance", value: 98 },
        { label: "Satisfaction", value: 90 },
        { label: "Temps de chargement", value: 80 },
      ],
    },
    {
      id: 15,
      title: "Sécurisation avancée",
      description: "Audit et mise en conformité ISO 27001.",
      tools: ["tools/wireshark2.svg", "tools/nmap.svg", "tools/cloudflare.svg"],
      image: "/security.jpg",
      stats: [
        { label: "Protection", value: 97 },
        { label: "Conformité", value: 100 },
        { label: "Satisfaction", value: 95 },
      ],
    },
    {
      id: 16,
      title: "Réalité augmentée",
      description: "Création d'une app immersive pour des expériences en RA.",
      tools: ["others/unity.svg", "others/blender.svg", "others/vr.svg"],
      image: "/ar.jpg",
      stats: [
        { label: "Innovation", value: 95 },
        { label: "Engagement", value: 92 },
        { label: "Satisfaction", value: 88 },
      ],
    },
    {
      id: 17,
      title: "Dashboard client",
      description: "Conception et développement d'un tableau de bord utilisateur.",
      tools: ["javascript/angular.svg", "projects/material.svg", "cloud/aws.svg"],
      image: "/dashboard.jpg",
      stats: [
        { label: "Ergonomie", value: 90 },
        { label: "Performance", value: 88 },
        { label: "Satisfaction", value: 92 },
      ],
    },
    {
      id: 18,
      title: "Modélisation architecturale",
      description: "Conception 3D pour un projet immobilier haut de gamme.",
      tools: ["others/blender.svg", "others/vr.svg", "others/unity.svg"],
      image: "/architecture.jpg",
      stats: [
        { label: "Réalisme", value: 95 },
        { label: "Précision", value: 90 },
        { label: "Satisfaction", value: 88 },
      ],
    },
    {
      id: 19,
      title: "Support DevOps",
      description: "Automatisation des pipelines CI/CD pour une équipe DevOps.",
      tools: ["projects/jenkins.svg", "tools/docker.svg", "tools/kubernetes.svg"],
      image: "/devops.jpg",
      stats: [
        { label: "Efficacité", value: 92 },
        { label: "Fiabilité", value: 90 },
        { label: "Adoption", value: 93 },
      ],
    },
    {
      id: 20,
      title: "Simulation VR",
      description: "Développement d'un simulateur en réalité virtuelle pour la formation.",
      tools: ["others/unity.svg", "others/vr.svg", "projects/csharp.svg"],
      image: "/simulation.jpg",
      stats: [
        { label: "Réalisme", value: 93 },
        { label: "Engagement", value: 90 },
        { label: "Innovation", value: 92 },
      ],
    },
  ];
  

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleNext = () => {
    setCurrentProject(
      projects[currentProject.id < projects.length ? currentProject.id : 0]
    );
  };

  const handlePrev = () => {
    setCurrentProject(
      projects[
        currentProject.id > 1 ? currentProject.id - 2 : projects.length - 1
      ]
    );
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-7xl w-full">
            {/* Carte du projet */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id + "-card"}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white border rounded-lg shadow-lg p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="font-inter text-2xl font-semibold text-gray-800 mb-2">
                    {currentProject.title}
                  </h3>
                  <p className="font-montserrat text-gray-600 mb-4">
                    {currentProject.description}
                  </p>
<div className="flex gap-4 mb-4">
  {currentProject.tools.map((tool, index) => (
    <motion.img
      key={index}
      src={`/src/assets/icons/devicons/${tool}`}
            alt={tool.split("/").pop().split(".")[0]}
      className="h-8 w-8"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
              </motion.div>
            </AnimatePresence>

            {/* Image du projet */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id + "-image"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hidden lg:block"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="rounded-xl w-full max-h-[350px] object-cover mx-auto"
                />
              </motion.div>
            </AnimatePresence>
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
          onClick={handlePrev}
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
          onClick={handleNext}
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
