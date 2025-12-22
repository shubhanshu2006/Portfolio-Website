import {
  motion as Motion,
} from "framer-motion";
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
    <section id="achievements" className="section-container px-4 py-20 bg-transparent">
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mb-4">
          <Trophy className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">Accomplishments</span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">
          Achievements
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Milestones and recognitions throughout my journey
        </p>
      </Motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 hidden md:block" />

        {achievements.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <Motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 border-4 border-white dark:border-zinc-900 transform -translate-x-1/2 hidden md:block z-10 shadow-lg shadow-blue-500/30" />

      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <Motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

          <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20">
            {/* Date Badge */}
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {item.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              {item.title}
            </h3>

            {/* Subtitle Badge */}
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-blue-500 to-indigo-500 text-white mb-4">
              {item.subtitle}
            </span>

            {/* Points */}
            <ul className="space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-black/70 dark:text-white/70">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  );
}
