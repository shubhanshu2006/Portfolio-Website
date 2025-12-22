import React from "react";
import { motion as Motion } from "framer-motion";
import { FolderGit2, Rocket } from "lucide-react";
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
      featured: true,
    },
    {
      title: "Beta",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added", "To be added", "To be added", "To be added"],
      site: "#",
      repo: "#",
      img: "/Coming_Soon.jpg",
      featured: false,
    },
    {
      title: "Gamma",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added", "To be added", "To be added", "To be added"],
      site: "#",
      repo: "#",
      img: "/Coming_Soon.jpg",
      featured: false,
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
    <section id="projects" className="section-container px-4 py-20 bg-transparent">
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 dark:bg-white/10 mb-4">
          <FolderGit2 className="w-4 h-4 text-black/70 dark:text-white/70" />
          <span className="text-sm font-medium text-black/70 dark:text-white/70">My Work</span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </Motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <Motion.div key={i} variants={itemVariants}>
              <ProjectCard {...p} />
            </Motion.div>
          ))}
        </Motion.div>

        {/* View More Button */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/shubhanshu2006"
            target="_blank"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold shadow-xl shadow-black/10 dark:shadow-white/10 hover:shadow-black/20 dark:hover:shadow-white/20 hover:scale-[1.02] transition-all duration-300"
          >
            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
