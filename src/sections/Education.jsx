import { motion as Motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export default function Education() {
  const educationData = [
    {
      institution: "Raj Kumar Goel Institute of Technology",
      logo: "/Logo.png",
      degree: "B.Tech — Computer Science and Engineering",
      duration: "2024 - 2028",
      status: "Currently Pursuing",
      focus: "Full-Stack Development",
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm mb-8 backdrop-blur-md">
          <GraduationCap className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">
            Academic Journey
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
          Formal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
            Education.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            <div className="glow-pulse-soft absolute -inset-1 bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur opacity-30" />

            <div className="relative bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
              {/* Top accent bar, like a certificate/credential ribbon */}
              <div className="h-1.5 w-full bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500" />

              <div className="relative p-8 md:p-10">
                <GraduationCap className="absolute -right-6 -top-10 w-48 h-48 text-orange-500/[0.04] dark:text-orange-400/[0.05] rotate-12 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-amber-500/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                {/* Institution header */}
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                  <Motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative shrink-0"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-orange-500 to-amber-500 p-0.5 shadow-lg shadow-orange-500/30">
                      <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <div className="absolute -inset-0.5 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl blur opacity-20 -z-10" />
                  </Motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-2xl font-bold text-black dark:text-white">
                        {edu.institution}
                      </h3>
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/40 dark:text-white/40 hover:text-orange-500 dark:hover:text-orange-400 transition-all hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Quick facts */}
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 dark:bg-orange-400/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
                        Duration
                      </p>
                      <p className="text-sm font-bold text-black dark:text-white truncate">
                        {edu.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
                        Status
                      </p>
                      <p className="text-sm font-bold text-black dark:text-white truncate">
                        {edu.status}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 dark:bg-orange-400/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
                        Focus
                      </p>
                      <p className="text-sm font-bold text-black dark:text-white truncate">
                        {edu.focus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="relative pt-6 border-t border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                    <h4 className="text-xs font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">
                      Highlights
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.highlights.map((highlight, idx) => (
                      <Motion.div
                        key={idx}
                        whileHover={{ scale: 1.03, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="flex items-center gap-2.5 pl-2 pr-3.5 py-2 rounded-xl bg-orange-500/5 dark:bg-orange-400/5 border border-orange-500/15 dark:border-orange-400/15 hover:border-orange-500/40 dark:hover:border-orange-400/30 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-sm font-semibold text-black/80 dark:text-white/80">
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
