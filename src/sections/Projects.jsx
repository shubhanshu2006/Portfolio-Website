import React from "react";
import { motion as Motion } from "framer-motion";
import { FolderGit2, Rocket, Sparkles } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "VideoTube",
      year: "2025",
      desc: "VideoTube is a full-stack video sharing platform built to replicate real-world streaming systems, featuring secure authentication, JWT-based sessions, protected routes, and a scalable backend for efficient content management and user interaction.",
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
      featured: false,
    },
    {
      title: "LinkDrop",
      year: "2026",
      desc: "LinkDrop is a secure file sharing platform designed to provide controlled access through expiring links, access restrictions, and storage management, ensuring privacy, reliability, and a seamless file distribution experience.",
      tech: [
        "NodeJs",
        "React",
        "Express",
        "MongoDB",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
      ],
      site: "https://link-drop-delta.vercel.app/",
      repo: "https://github.com/shubhanshu2006/LinkDrop",
      img: "Project_LinkDrop.png",
      featured: false,
    },
    {
      title: "BharatSetu",
      year: "2026",
      desc: "BharatSetu is a scalable civic-tech platform that bridges citizens and authorities through AI-assisted complaint triage, real-time tracking, SLA enforcement, and data-driven administrative insights to ensure transparent and accountable governance.",
      tech: [
        "NextJs",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "NodeJs",
        "Express",
        "PostgreSQL",
        "Supabase",
        "Redis",
      ],
      site: "https://p-crm-platform.vercel.app/",
      repo: "https://github.com/shubhanshu2006/P-CRM-Platform",
      img: "/Project_BharatSetu.png",
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="section-container px-4 py-32 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">
              Select Works
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Projects.</span>
          </h2>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            A showcase of my recent platforms, technical experiments, and scalable architectures designed for modern web requirements.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="h-full"
            >
              <ProjectCard {...p} />
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mt-20"
        >
          <Motion.a
            href="https://github.com/shubhanshu2006"
            target="_blank"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.12)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_rgb(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-100 transition-opacity duration-500" />
            <Rocket className="w-5 h-5 relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-white transition-all duration-300" />
            <span className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">View More on GitHub</span>
          </Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}
