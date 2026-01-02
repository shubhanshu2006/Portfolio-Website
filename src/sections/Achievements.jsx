import { motion as Motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

const achievements = [
  {
    date: "September 2025 - October 2025",
    title: "Smart India Hackathon",
    subtitle: "College Level",
    points: [
      "Built an AI-based farming assistant",
      "Worked in a 6-member team",
      "Solved real-world agricultural problems",
    ],
  },
  {
    date: "Future",
    title: "Coming Soon...",
    subtitle: "Under Preparation",
    points: ["Details will be updated soon"],
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-container px-4 py-20 bg-transparent"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mb-4">
          <Trophy className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wider">
            Accomplishments
          </span>
        </div>

        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Achievements
        </h2>

        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Milestones and recognitions throughout my journey
        </p>
      </Motion.div>

      <div className="max-w-4xl mx-auto relative">
        <Motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 
          bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 hidden md:block"
        />

        {achievements.map((item, i) => (
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
            <div
              className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full 
              bg-linear-to-r from-blue-500 to-indigo-500 
              border-4 border-white dark:border-zinc-900 
              transform -translate-x-1/2 hidden md:block z-10 
              shadow-lg shadow-blue-500/50"
            />

            <div
              className={`w-full md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <Motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <Motion.div
                  animate={{ opacity: [0.1, 0.25, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-1 
                  bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 
                  rounded-2xl blur opacity-20"
                />

                <div
                  className="relative bg-white 
                  dark:bg-linear-to-br dark:from-zinc-900 dark:to-zinc-950 
                  rounded-2xl p-6 border border-black/10 dark:border-white/10 
                  shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <div
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-bold 
                    bg-linear-to-r from-blue-500 to-indigo-500 text-white 
                    shadow-lg shadow-blue-500/30 mb-4"
                  >
                    {item.subtitle}
                  </div>

                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm 
                        text-black/70 dark:text-white/70"
                      >
                        <span className="text-blue-500 dark:text-blue-400 mt-1 font-bold">
                          •
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
