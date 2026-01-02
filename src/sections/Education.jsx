import { motion as Motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export default function Education() {
  const educationData = [
    {
      institution: "Raj Kumar Goel Institute of Technology",
      logo: "/Logo.png",
      degree: "B.Tech — Computer Science and Engineering",
      duration: "2024 - 2028",

      status: "Currently Pursuing",
      link: "https://www.rkgit.edu.in",
      highlights: [
        "Specializing in Full-Stack Development",
        "Active participant in coding competitions",
        "Member of technical clubs",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="section-container px-4 py-20 bg-transparent"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-400/10 mb-4">
          <GraduationCap className="w-4 h-4 text-purple-500 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-wider">
            Academic Journey
          </span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Education
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Building a strong foundation in computer science and software
          engineering
        </p>
      </Motion.div>

      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 rounded-3xl p-8 border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-purple-500/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-blue-500/10 to-transparent rounded-full translate-y-24 -translate-x-24" />

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  <Motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative shrink-0"
                  >
                    <div className="w-20 h-20 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 p-0.5 shadow-lg shadow-purple-500/30">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <div className="absolute -inset-0.5 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-20 -z-10" />
                  </Motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-black dark:text-white">
                        {edu.institution}
                      </h3>
                      <a
                        href={edu.link}
                        target="_blank"
                        className="text-black/40 dark:text-white/40 hover:text-purple-500 dark:hover:text-purple-400 transition-all hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-3">
                      {edu.degree}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-linear-to-r from-purple-500/20 to-indigo-500/20 border border-purple-300/50 dark:border-purple-700/50"
                      >
                        <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                          {edu.duration}
                        </span>
                      </Motion.div>

                      <Motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-500/20 border border-green-300/50 dark:border-green-700/50"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                          {edu.status}
                        </span>
                      </Motion.div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    <h4 className="text-sm font-bold text-black/60 dark:text-white/60 uppercase tracking-wider">
                      Highlights
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <Motion.div
                        key={idx}
                        whileHover={{ scale: 1.03, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-linear-to-r from-purple-500/10 to-indigo-500/10 border border-purple-300/30 dark:border-purple-700/30 hover:border-purple-500 dark:hover:border-purple-400 "
                      >
                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 shrink-0" />
                        <span className="text-sm font-medium text-black/70 dark:text-white/70">
                          {highlight}
                        </span>
                      </Motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
