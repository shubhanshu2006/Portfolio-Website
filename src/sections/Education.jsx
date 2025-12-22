import { motion as Motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, ExternalLink } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      institution: "Raj Kumar Goel Institute of Technology",
      logo: "/Logo.png",
      degree: "B.Tech — Computer Science and Engineering",
      duration: "2024 - 2028",
      grade: "9.47/10",
      gradeType: "CGPA",
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
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-400/10 mb-4">
          <GraduationCap className="w-4 h-4 text-purple-500 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-500 dark:text-purple-400">Academic Journey</span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Education
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Building a strong foundation in computer science and software engineering
        </p>
      </Motion.div>

      {/* Education Cards */}
      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
            <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-purple-500/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-blue-500/10 to-transparent rounded-full translate-y-24 -translate-x-24" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  {/* Logo */}
                  <Motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500 to-blue-500 p-0.5 shadow-lg shadow-purple-500/20">
                      <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    {/* Status badge */}
                    <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-green-500 rounded-full">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Active</span>
                    </div>
                  </Motion.div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-black dark:text-white">
                        {edu.institution}
                      </h3>
                      <a
                        href={edu.link}
                        target="_blank"
                        className="text-black/40 dark:text-white/40 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-lg font-medium text-purple-500 dark:text-purple-400 mb-3">
                      {edu.degree}
                    </p>
                    
                    {/* Meta badges */}
                    <div className="flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10">
                        <Calendar className="w-4 h-4 text-black/60 dark:text-white/60" />
                        <span className="text-sm font-medium text-black/70 dark:text-white/70">{edu.duration}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-bold">{edu.gradeType}: {edu.grade}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium">{edu.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    <h4 className="text-sm font-semibold text-black/60 dark:text-white/60 uppercase tracking-wider">
                      Highlights
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <Motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
                        <span className="text-sm text-black/70 dark:text-white/70">{highlight}</span>
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
