import React from "react";
import { Globe } from "lucide-react";
import Github from "../assets/github.svg";

export default function ProjectCard({
  title,
  year,
  desc,
  tech,
  site,
  repo,
  img,
}) {
  return (
    <div
      className="
        bg-white dark:bg-black border border-black/20 dark:border-white/20
        rounded-xl overflow-hidden shadow-sm 
        transition-all duration-300 
        hover:scale-[1.03] hover:shadow-xl hover:shadow-white/10
      "
    >
      <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="
            w-full h-full object-cover 
            transition-transform duration-500
            hover:scale-110
          "
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h3>

        <p className="text-sm text-black/60 dark:text-white/60 mt-1">{year}</p>

        <p className="text-black/80 dark:text-white/80 mt-3 leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-sm rounded-md border 
                bg-white text-black border-black/20
                dark:bg-black dark:text-white dark:border-white/20
                transition-all duration-200
                hover:bg-black hover:text-white hover:border-black
                dark:hover:bg-white dark:hover:text-black dark:hover:border-white
                hover:scale-[1.05]
              "
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5">
          <a
            href={site}
            target="_blank"
            className="
              flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
              bg-black text-white dark:bg-white dark:text-black
              transition-all duration-300
              hover:scale-[1.08]
              hover:bg-gray-800 hover:text-white
              dark:hover:bg-gray-200 dark:hover:text-black
              shadow-sm hover:shadow-lg
            "
          >
            <Globe size={16} />
            Website
          </a>

          <a
            href={repo}
            target="_blank"
            className="
              flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
              bg-black text-white dark:bg-white dark:text-black
              transition-all duration-300
              hover:scale-[1.08]
              hover:bg-gray-800 hover:text-white
              dark:hover:bg-gray-200 dark:hover:text-black
              shadow-sm hover:shadow-lg
            "
          >
            <img src={Github} alt="GitHub" className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
