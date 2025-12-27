import { motion as Motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container px-4 py-20 bg-transparent">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mb-4">
          <User className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
            Get To Know Me
          </span>
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative group">
          <Motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-1 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur opacity-20"
          />

          <div className="relative bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 rounded-3xl p-8 md:p-12 border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />

            <div className="relative">
              <p className="text-lg md:text-xl leading-relaxed text-black/80 dark:text-white/80 font-medium">
                I am a{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Computer Science and Engineering
                </span>{" "}
                student and{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  full-stack developer
                </span>{" "}
                with practical experience in modern web technologies such as {" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  JavaScript, TypeScript, React, Node.js, NextJs and Python.
                </span>{" "}
                I specialize in building scalable, maintainable applications
                while emphasizing clean architecture, performance, and
                reliability.
              </p>

              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-900"
                >
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    🎓 Continuous Learning
                  </span>
                </Motion.div>
                <Motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-900"
                >
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    💡 Problem Solving
                  </span>
                </Motion.div>
                <Motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-900"
                >
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    🚀 Innovation Focus
                  </span>
                </Motion.div>
              </Motion.div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
