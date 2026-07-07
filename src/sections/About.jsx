import { motion as Motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Lightbulb,
  Rocket,
  Code2,
  MapPin,
  CheckCircle2,
  Quote,
} from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Continuous Learning" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Rocket, label: "Innovation Focus" },
];

const facts = [
  { icon: Code2, label: "Role", value: "Full-Stack Developer" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech, CSE · 2024-2028",
  },
  { icon: MapPin, label: "Based in", value: "India" },
  {
    icon: CheckCircle2,
    label: "Status",
    value: "Open to opportunities",
    live: true,
  },
];

export default function About() {
  return (
    <section id="about" className="section-container px-4 py-20 bg-transparent">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm mb-8 backdrop-blur-md">
          <User className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">
            Get To Know Me
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
            Me.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
          Passionate about creating impactful digital experiences
        </p>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bio card */}
          <div className="relative group lg:col-span-3">
            <div className="glow-pulse-soft absolute -inset-1 bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur" />

            <div className="relative h-full bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 rounded-3xl p-8 md:p-10 border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-orange-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

              <div className="relative">
                <Quote
                  className="w-9 h-9 text-orange-500/25 dark:text-orange-400/25 mb-4"
                  strokeWidth={2.5}
                />

                <p className="text-xl md:text-2xl font-bold leading-snug text-black dark:text-white mb-4 tracking-tight">
                  I am a{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
                    Full-Stack Developer
                  </span>{" "}
                  who loves turning ideas into real, production-ready products-from code to deployment.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-black/60 dark:text-white/60 font-medium">
                  I have practical experience with{" "}
                  <span className="font-semibold text-black/80 dark:text-white/80">
                    JavaScript, TypeScript, React, Node.js, Next.js and Python
                  </span>
                  , and I specialize in building scalable, maintainable
                  applications while emphasizing clean architecture,
                  performance, and reliability.
                </p>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-7 flex flex-wrap gap-3"
                >
                  {highlights.map((item, i) => (
                    <Motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full bg-orange-500/5 dark:bg-orange-400/5 border border-orange-500/20 dark:border-orange-400/20"
                    >
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                        <item.icon
                          className="w-3.5 h-3.5 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                        {item.label}
                      </span>
                    </Motion.div>
                  ))}
                </Motion.div>
              </div>
            </div>
          </div>

          {/* At a glance panel */}
          <div className="relative lg:col-span-2">
            <div className="relative h-full bg-white dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 rounded-3xl p-6 md:p-7 border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 flex flex-col overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-amber-500/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

              <h3 className="relative text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-5">
                At a Glance
              </h3>

              <div className="relative flex flex-col divide-y divide-black/5 dark:divide-white/10">
                {facts.map((fact, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 dark:bg-orange-400/10 flex items-center justify-center shrink-0">
                      <fact.icon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
                        {fact.label}
                      </p>
                      <p className="text-sm font-bold text-black dark:text-white flex items-center gap-2">
                        {fact.value}
                        {fact.live && (
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
