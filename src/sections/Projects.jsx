import React from "react";
import { motion as Motion } from "framer-motion";
import { FolderGit2, Rocket } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "VideoTube",
      year: "2025",
      desc: "A full-stack video sharing platform built to demonstrate authentication, secure cookies, JWT-based sessions, and scalable backend design.",
      tech: [
        "NodeJs",
        "React",
        "Express",
        "MongoDB",
        "TypeScript",
        "TailwindCSS",
      ],
      site: "https://video-tube-self.vercel.app/",
      repo: "https://github.com/shubhanshu2006/Video_Tube",
      img: "Project_VideoTube.png",
      featured: true,
    },
    {
      title: "Beta",
      year: "--",
      desc: "To be added soon...",
      tech: ["To be added", "To be added", "To be added", "To be added"],
      site: "#",
      repo: "#",
      img: "/Coming_Soon.jpg",
      featured: false,
    },
    {
      title: "Gamma",
      year: "--",
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
    <section
      id="projects"
      className="section-container px-4 py-20 bg-transparent"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-400/10 mb-4">
          <FolderGit2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            My Work
          </span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </Motion.div>

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

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-black/80 dark:text-white/80 text-3xl mt-14 font-medium"
        >
          More projects will be added soon...
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mt-16"
        >
          <Motion.a
            href="https://github.com/shubhanshu2006"
            target="_blank"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.6,
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-black font-bold shadow-xl shadow-black/30 dark:shadow-white/20 hover:shadow-black/50 dark:hover:shadow-white/40 "
          >
            <Rocket className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            <span>View More on GitHub</span>
          </Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}
