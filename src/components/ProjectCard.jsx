import React from "react";
import { motion as Motion } from "framer-motion";
import { Globe, ExternalLink, Github, Calendar, Sparkles } from "lucide-react";
import GithubIcon from "../assets/github.svg";

export default function ProjectCard({
  title,
  year,
  desc,
  tech,
  site,
  repo,
  img,
  featured = false,
}) {
  return (
    <Motion.div
      className="relative group h-full"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <Motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute -inset-1 rounded-3xl blur ${
          featured
            ? "bg-linear-to-r from-amber-400 via-orange-400 to-red-400"
            : "bg-linear-to-r from-zinc-400 via-slate-400 to-gray-400"
        }`}
      />

      <div className="relative h-full bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30 flex flex-col">
        <div className="relative w-full bg-linear-to-br from-orange-100 to-amber-100 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
          {featured && (
            <Motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/30"
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </Motion.div>
          )}

          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
            <Calendar className="w-3 h-3" />
            {year}
          </div>

          <div className="w-full aspect-18/9 overflow-hidden rounded-xl bg-black/20">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>

        <div className="flex-1 p-6 flex flex-col relative">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            {title}
          </h3>

          <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed flex-1">
            {desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t, i) => (
              <Motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-linear-to-r from-black/5 to-black/2 dark:from-white/10 dark:to-white/5 text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/15 cursor-default "
              >
                {t}
              </Motion.span>
            ))}
          </div>

          <div className="flex gap-3 mt-6 pt-5 border-t border-black/10 dark:border-white/10">
            <Motion.a
              href={site}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </Motion.a>

            <Motion.a
              href={repo}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-black/5 dark:bg-white/10 text-black dark:text-white border-2 border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/10 dark:hover:bg-white/15 transition-all duration-300"
            >
              <img
                src={GithubIcon}
                alt="GitHub"
                className="w-4 h-4 dark:invert group-hover/btn:scale-110 transition-transform"
              />
              Code
            </Motion.a>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
