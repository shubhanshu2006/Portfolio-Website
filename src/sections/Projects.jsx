import React from "react";
import { motion as Motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Alpha",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added", "To be added", "To be added", "To be added"],
      site: "#",
      repo: "#",
      img: "/Coming_Soon.jpg",
    },
    {
      title: "Beta",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added", "To be added", "To be added", "To be added"],
      site: "#",
      repo: "#",
      img: "/Coming_Soon.jpg",
    },
    {
      title: "Gamma",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added", "To be added", "To be added", "To be added"],
      site: "#",
      repo: "#",
      img: "/Coming_Soon.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="section-container px-4">
      <Motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black dark:text-white text-4xl font-bold mb-8 text-center"
      >
        Projects
      </Motion.h2>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {projects.map((p, i) => (
          <Motion.div key={i} variants={itemVariants}>
            <ProjectCard {...p} />
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
