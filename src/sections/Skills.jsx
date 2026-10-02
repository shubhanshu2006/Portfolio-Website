import { motion as Motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiExpress,
  SiCplusplus,
  SiAmazonwebservices,
  SiRedis,
  SiPostgresql,
  SiPostman,
  SiFramer,
  SiGithubactions,
  SiDocker,
  SiShadcnui,
  SiGithub,
  SiRabbitmq,
  SiWebrtc,
  SiRedux,
  SiSocketdotio,
  SiLangchain,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { FaLock } from "react-icons/fa";
import {
  LuCloudCog,
  LuWorkflow,
  LuUser,
  LuMessageCircle,
  LuHandshake,
  LuNetwork,
  LuBot,
  LuBrainCircuit,
} from "react-icons/lu";
import { TbApi, TbPlugConnected, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  Users,
  LayoutTemplate,
  Server,
  Terminal,
  Database,
  Bot,
} from "lucide-react";

function SiGroq({ className }) {
  return (
    <svg
      viewBox="0 0 209.604012 304.704012"
      fill="currentColor"
      className={className || "w-4 h-4"}
      width="1em"
      height="1em"
    >
      <path d="M105.304012.00401184C47.7040118-.49598816.50401184 45.8040118.00401184 103.404012c-.5 57.6 45.79999996 104.8 103.40000016 105.3h36.2v-39.1h-34.3c-36.0000002.4-65.6000002-28.4-66.0000002-64.5-.4-36.1000002 28.4-65.6000002 64.5000002-66.0000002h1.5c36 0 65.2 29.2 65.4 65.2000002v96.1c0 35.7-29.1 64.8-64.7 65.2-17.1000002-.1-33.4000002-7-45.4000002-19.1l-27.7 27.7c19.2 19.3 45.2 30.3 72.4000002 30.5h1.4c56.9-.8 102.6-47 102.9-103.9v-99.1c-1.4-56.5000002-47.7-101.60000016-104.3-101.70000016Z" />
    </svg>
  );
}

function SiLanggraph({ className }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
      width="1em"
      height="1em"
    >
      <path d="M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z" />
    </svg>
  );
}

const sections = [
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "text-purple-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-400" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "REST API", icon: TbApi, color: "text-orange-400" },
      { name: "JWT Authentication", icon: FaLock, color: "text-emerald-400" },
      { name: "Web Sockets", icon: TbPlugConnected, color: "text-cyan-400" },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
        color: "text-black dark:text-white",
      },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "SQL", icon: TbSql, color: "text-sky-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-gray-800 dark:text-gray-200",
      },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    ],
  },
  {
    title: "Gen AI & Agentic AI",
    icon: Bot,
    skills: [
      { name: "LangChain", icon: SiLangchain, color: "text-emerald-500" },
      { name: "LangGraph", icon: SiLanggraph, color: "text-cyan-500" },
      {
        name: "OpenAI",
        icon: SiOpenai,
        color: "text-emerald-600 dark:text-emerald-400",
      },
      { name: "Groq", icon: SiGroq, color: "text-orange-500" },
      { name: "AI Agents", icon: LuBot, color: "text-purple-400" },
      { name: "RAG & Workflows", icon: LuBrainCircuit, color: "text-cyan-400" },
      { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-400" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    ],
  },
  {
    title: "DevOps and Cloud",
    icon: LuCloudCog,
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
      { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-400" },
    ],
  },
  {
    title: "Distributed Systems",
    icon: LuNetwork,
    skills: [
      { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500" },
      { name: "BullMQ", icon: LuWorkflow, color: "text-red-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "WebRTC", icon: SiWebrtc, color: "text-blue-500" },
    ],
  },

  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Team Leadership", icon: LuUser, color: "text-pink-400" },
      {
        name: "Communication",
        icon: LuMessageCircle,
        color: "text-indigo-400",
      },
      { name: "Teamwork", icon: LuHandshake, color: "text-cyan-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 py-20 bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-80 h-80 bg-linear-to-bl from-orange-500/5 to-transparent rounded-full translate-x-1/2 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-linear-to-tr from-amber-500/5 to-transparent rounded-full -translate-x-1/3 pointer-events-none -z-10" />

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm mb-8 backdrop-blur-md">
          <SiReact className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">
            Technical Expertise
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400">
            Skills.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
          Technologies and tools I use to bring ideas to life
        </p>
      </Motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative rounded-2xl bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 border border-black/10 dark:border-white/10 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-black/2 dark:to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-orange-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-amber-500/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md shadow-orange-500/25 shrink-0">
                  <section.icon
                    className="w-5 h-5 text-white"
                    strokeWidth={2.25}
                  />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {section.title}
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2.5">
                {section.skills.map((skill, idx) => (
                  <Motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2.5 pl-2 pr-3.5 py-2 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-orange-400/40 dark:hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-black/30 transition-shadow duration-300"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                      {skill.type === "svg" ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-4 h-4 dark:invert"
                        />
                      ) : (
                        <skill.icon className={`text-sm ${skill.color}`} />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-black/80 dark:text-white/80">
                      {skill.name}
                    </span>
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
