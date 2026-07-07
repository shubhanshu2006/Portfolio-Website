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
  SiKubernetes,
  SiDocker,
  SiShadcnui,
  SiGithub,
  SiApachekafka,
  SiRabbitmq,
  SiWebrtc,
  SiRedux,
} from "react-icons/si";
import { FaLock } from "react-icons/fa";
import {
  LuCloudCog,
  LuWorkflow,
  LuUser,
  LuMessageCircle,
  LuHandshake,
  LuNetwork,
} from "react-icons/lu";
import { TbApi, TbPlugConnected } from "react-icons/tb";
import {
  Users,
  LayoutTemplate,
  Server,
  Terminal,
  Database,
  Wrench,
} from "lucide-react";

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
    title: "Databases and Caching",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
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
    title: "DevOps and Cloud",
    icon: LuCloudCog,
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-400" },
    ],
  },
  {
    title: "Distributed Systems",
    icon: LuNetwork,
    skills: [
      { name: "Kafka", icon: SiApachekafka, color: "text-orange-600" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500" },
      { name: "BullMQ", icon: LuWorkflow, color: "text-red-500" },
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
