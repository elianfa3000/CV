// src/data/projects.js

import dijitalSkills from "../assets/digitalSkills.png";
import pokeApi from "../assets/pokeApi.png";

import pymes from "../assets/pymes.png";
import anki from "../assets/anki.png";
const projects = [
  {
    title: "Plataforma educativa DIGCOMP",
    image: dijitalSkills,
    description:
      "Aplicación web creada para fortalecer competencias digitales en estudiantes de zonas rurales, con módulos interactivos y contenido basado en el marco DIGCOMP.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    link: "https://digital-skills-hub.vercel.app/",
    repositories: {
      frontEnd: "https://github.com/elianfa3000/DigitalSkillsHub",
      backEnd: "https://github.com/elianfa3000/DigitalSkills_BackEnd",
    },
    deploy: {
      frontEnd: "Vercel",
      backEnd: "Render",
    },
  },
  {
    title: "Sitio web informativo PuntoPymes",
    image: pymes,
    description:
      "Sitio web informativo diseñado para la empresa PuntoPymes, con navegación por secciones y contenido institucional accesible para clientes y usuarios.",
    technologies: ["Angular", "TypeScript"],
    link: "https://valitarv.onrender.com/#/",
    repositories: {
      frontEnd: "https://github.com/elianfa3000/ValitaRV",
    },
    deploy: {
      frontEnd: "Render",
    },
  },
  {
    title: "PokeApp",
    image: pokeApi,
    description:
      "Aplicación simple para explorar información de Pokémon, con listado, detalles y búsqueda básica.",
    technologies: ["Angular", "TypeScript"],
    link: "https://elianfa3000.github.io/pokeApi/",
    repositories: {
      frontEnd: "https://github.com/elianfa3000/pokeApi",
    },
    deploy: {
      frontEnd: "GitHub Pages",
    },
  },
  {
    title: "Anki Tools",
    image: anki,
    description:
      "Aplicación que permite consultar palabras desde una base de datos y visualizar contenido cargando archivos de Anki.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    link: "https://anky-omega.vercel.app/",
    repositories: {
      frontEnd: "https://github.com/elianfa3000/anky",
      backEnd: "https://github.com/elianfa3000/Anky-BackEnd",
    },
    deploy: { frontEnd: "Vercel", backEnd: "Railway" },
  },
];

export default projects;
