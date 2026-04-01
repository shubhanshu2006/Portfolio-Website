import React from "react";
import { motion as Motion } from "framer-motion";
import { Code2, Terminal, CheckCircle2 } from "lucide-react";

export default function CodePhilosophy() {
  const codeSnippet = `const optimizeExperience = (developer, user) => {
  return {
    readableCode: true,
    performance: "Blazing Fast",
    accessibility: "100%",
    joy: () => developer.happiness * user.satisfaction
  };
};

// I believe in writing code that the next 
// developer can read like a book.
optimizeExperience(me, you);`;

  return (
    <section
      id="philosophy"
      className="section-container px-4 py-32 bg-transparent"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Text */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 mb-6">
              <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Engineering Philosophy
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              Code as Craft
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-medium">
              I treat software development as a balance between scalability,
              performance, and developer experience.
            </p>

            <ul className="space-y-4">
              {[
                "Design systems with modularity and reusability.",
                "Prioritize readable and testable architectures.",
                "Focus on robust backend scaling and seamless UX.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-medium">
              For me, engineering is about solving real problems with clean,
              efficient, and scalable solutions.
            </p>
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/10">
            <p className="text-2xl font-bold italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
              “Good code works. Great code lasts.”
            </p>
          </div>
        </Motion.div>

        {/* Right: Code Block */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex-[1.2] w-full relative group"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative rounded-2xl bg-[#0d1117]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
              <div className="flex-1 flex justify-center text-xs text-white/50 font-medium tracking-wider font-mono flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> philosophy.ts
              </div>
            </div>
            <div className="p-6 md:p-8 overflow-x-auto text-[15px] leading-relaxed">
              <pre className="font-mono">
                <code>
                  {codeSnippet.split("\n").map((line, i) => (
                    <div
                      key={i}
                      className="table-row group/line hover:bg-white/5 transition-colors h-7"
                    >
                      <span className="table-cell text-white/20 pr-6 select-none text-right border-r border-white/5 align-middle">
                        {i + 1}
                      </span>
                      <span className="table-cell pl-6 whitespace-pre align-middle">
                        {line.includes("//") ? (
                          <span className="text-[#8b949e] italic">{line}</span>
                        ) : line.includes("function") ||
                          line.includes("const") ||
                          line.includes("=>") ? (
                          <span className="text-[#ff7b72]">{line}</span>
                        ) : line.includes("return") ? (
                          <span className="text-[#ff7b72]">{line}</span>
                        ) : line.includes("true") || line.match(/[0-9]+%?/) ? (
                          <span className="text-[#79c0ff]">{line}</span>
                        ) : line.includes('"') || line.includes("'") ? (
                          <span className="text-[#a5d6ff]">{line}</span>
                        ) : line.includes(":") ? (
                          <span className="text-[#d2a8ff]">{line}</span>
                        ) : (
                          <span className="text-[#c9d1d9]">{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
