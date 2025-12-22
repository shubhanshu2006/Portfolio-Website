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
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
        featured 
          ? 'bg-linear-to-r from-zinc-400 via-slate-400 to-gray-400' 
          : 'bg-linear-to-r from-zinc-400 via-slate-400 to-gray-400'
      }`} />
      
      <div className="relative h-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20 flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-52 bg-linear-to-br from-orange-100 to-amber-100 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold shadow-lg">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          )}
          
          {/* Year badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
            <Calendar className="w-3 h-3" />
            {year}
          </div>
          
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-black dark:text-white mb-2 flex items-center gap-2">
            {title}
            <ExternalLink className="w-4 h-4 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </h3>

          {/* Description */}
          <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed flex-1">
            {desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:scale-105 cursor-default transition-all duration-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-5 pt-5 border-t border-black/10 dark:border-white/10">
            <a
              href={site}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/10 hover:shadow-black/20 dark:hover:shadow-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </a>

            <a
              href={repo}
              target="_blank"
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-[1.02] transition-all duration-300"
            >
              <img src={GithubIcon} alt="GitHub" className="w-4 h-4 dark:invert group-hover/btn:invert dark:group-hover/btn:invert-0" />
              Code
            </a>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}