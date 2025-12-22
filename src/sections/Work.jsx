import React from "react";
import { motion as Motion } from "framer-motion";

export default function Work() {
  const workData = [
    {
      company: "Alpha",
      logo: "/Coming_Soon_Logo.jpg",
      role: "Coming Soon...",
      type: "Coming Soon...",
      dates: "--",
      link: "#",
    },
  ];

  return (
    <section
      id="work"
      className="section-container px-4 py-16 bg-gray-100 dark:bg-black transition-colors"
    >
      <Motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black dark:text-white text-4xl font-bold mb-6 text-center"
      >
        Work Experience
      </Motion.h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {workData.map((job, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="
              flex items-center justify-between p-4 rounded-lg 
              bg-white dark:bg-black border border-black/20 dark:border-white/20
              transition-shadow duration-300
              hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10
            "
          >
            <div className="flex items-center gap-4">
              <img
                src={job.logo}
                alt={job.company}
                className="
                  w-14 h-14 rounded-full object-cover
                  transition-all duration-300
                  hover:scale-110
                "
              />

              <div>
                <a
                  href={job.link}
                  target="_blank"
                  className="
                    text-lg font-semibold text-black dark:text-white 
                    transition-none
                   
                  "
                >
                  {job.company}
                </a>

                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="
    px-3 py-1 rounded-full text-xs font-semibold
    bg-black text-white
    dark:bg-white dark:text-black
    border border-black/20 dark:border-white/20
    shadow-sm
    transition-colors duration-200
    hover:bg-black/80 dark:hover:bg-white/80
  "
                  >
                    {job.type}
                  </span>
                </div>

                <p className="text-sm font-bold text-black/70 dark:text-white/70 mt-1">
                  {job.role}
                </p>
              </div>
            </div>

            <p className="text-sm font-medium text-black/70 dark:text-white/70 transition-all">
              {job.dates}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
