import { motion as Motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
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
          <User className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">Get To Know Me</span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Passionate about creating impactful digital experiences
        </p>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          
          <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20">
            <p className="text-center text-xl md:text-2xl leading-relaxed text-black/80 dark:text-white/80">
              I am a Computer Science Engineering student and full-stack developer
              with practical experience in modern web technologies such as JavaScript,
              TypeScript, React, Node.js, and Python. I specialize in building
              scalable, maintainable applications while emphasizing clean
              architecture, performance, and reliability.
            </p>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
