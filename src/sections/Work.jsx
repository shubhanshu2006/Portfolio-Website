import React from "react";
import { motion as Motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Work() {
  const workData = [
    {
      company: "Alpha",
      logo: "/Coming_Soon_Logo.jpg",
      role: "Coming Soon...",
      type: "Coming Soon...",
      dates: "Coming Soon",
      location: "Remote / On-site",
      link: "#",
      description: "Exciting opportunity coming soon. Stay tuned for updates on my professional journey.",
      skills: ["React", "Node.js", "TypeScript"],
    },
  ];

  return (
    <section
      id="work"
      className="section-container px-4 py-20 bg-transparent"
    >
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mb-4">
          <Briefcase className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">Career</span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Work Experience
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          My professional journey and the amazing teams I've worked with
        </p>
      </Motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 hidden md:block" />
        
        {workData.map((job, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 border-4 border-white dark:border-zinc-900 transform -translate-x-1/2 hidden md:block z-10 shadow-lg shadow-blue-500/30" />
            
            {/* Card */}
            <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <Motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-black/10 dark:border-white/10"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-black dark:text-white">
                          {job.company}
                        </h3>
                        <a
                          href={job.link}
                          target="_blank"
                          className="text-black/40 dark:text-white/40 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-lg font-semibold text-blue-500 dark:text-blue-400">
                        {job.role}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-black/60 dark:text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.dates}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-blue-500 to-indigo-500 text-white">
                      {job.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-black/70 dark:text-white/70 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
