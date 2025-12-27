import { motion as Motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiNextdotjs,
  SiExpress,
  SiCplusplus,
} from "react-icons/si";
import { FaDatabase, FaLock } from "react-icons/fa";
import { Users } from "lucide-react";
import CRUD from "../assets/CRUD.svg";
import RestAPI from "../assets/Rest.svg";
import Postman from "../assets/Postman.svg";
import Vercel from "../assets/Vercel.svg";
import VS from "../assets/VS.svg";
import Shadcn from "../assets/Shadcn.svg";
import Daisy from "../assets/Daisy.svg";

const sections = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "shadcn/ui", icon: Shadcn, type: "svg" },
      { name: "DaisyUI", icon: Daisy, type: "svg" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "REST APIs", icon: RestAPI, type: "svg" },
      { name: "JWT Authentication", icon: FaLock, color: "text-emerald-400" },
      { name: "CRUD Operations", icon: CRUD, type: "svg" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "SQL", icon: FaDatabase, color: "text-indigo-400" },
      { name: "Mongoose (ODM)", icon: SiMongodb, color: "text-red-500" },
      { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-500" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGit, color: "text-orange-500" },
      { name: "VS Code", icon: VS, type: "svg" },
      { name: "Postman", icon: Postman, type: "svg" },
      { name: "Vercel", icon: Vercel, type: "svg" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Team Leadership", icon: Users, color: "text-pink-400" },
      { name: "Communication", icon: Users, color: "text-indigo-400" },
      { name: "Problem Solving", icon: Users, color: "text-emerald-400" },
      { name: "Collaboration", icon: Users, color: "text-cyan-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 bg-transparent">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 mb-4">
          <SiReact className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          <span className="text-sm font-medium text-emerald-500 dark:text-emerald-400">
            Technical Expertise
          </span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Skills
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </Motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative rounded-2xl bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 border border-black/10 dark:border-white/10 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-black/2 dark:to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-purple-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-blue-500/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

              <h3 className="relative text-xl font-bold text-black dark:text-white mb-5 text-center">
                {section.title}
              </h3>

              <div className="relative flex flex-wrap gap-3 justify-center">
                {section.skills.map((skill, idx) => (
                  <Motion.div
                    key={idx}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white text-base"
                  >
                    {skill.type === "svg" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 dark:invert"
                      />
                    ) : (
                      <skill.icon className={`text-lg ${skill.color}`} />
                    )}
                    <span className="font-medium">{skill.name}</span>
                  </Motion.div>
                ))}
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
