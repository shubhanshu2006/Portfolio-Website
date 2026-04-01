import React from "react";
import { motion as Motion } from "framer-motion";
import { Globe, ExternalLink, Calendar, Sparkles } from "lucide-react";
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
      className="relative group h-full flex flex-col rounded-[2rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] z-10 hover:z-20 will-change-transform"
    >
      {/* Featured Gradient Glow */}
      {featured && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Card Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full bg-white dark:bg-zinc-900/90 backdrop-blur-xl rounded-[2rem] overflow-hidden">
        
        {/* Image Section */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-black/5 dark:border-white/5">
          <Motion.img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover origin-center transition-transform duration-300 ease-out group-hover:scale-105"
            initial={{ scale: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
            {featured ? (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-md text-black dark:text-white text-[10px] font-extrabold uppercase tracking-wide shadow-lg border border-black/5 dark:border-white/10">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Featured
              </div>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              <Calendar className="w-3 h-3" />
              {year}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col p-6 sm:p-8 bg-white dark:bg-zinc-900">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mb-6 flex-1">
            {desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 transition-colors group-hover:border-black/20 dark:group-hover:border-white/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-6 border-t border-black/5 dark:border-white/10 mt-auto">
            <Motion.a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-black dark:bg-white dark:text-black shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </Motion.a>
            <Motion.a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-black dark:text-white border-2 border-black/10 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              <img src={GithubIcon} className="w-4 h-4 dark:invert" alt="GitHub" />
              Source
            </Motion.a>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
