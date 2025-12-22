import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    date: "Mar 2024",
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
    <section id="achievements" className="relative px-4 py-16 bg-transparent">
      <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
        Achievements
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-indigo-500/30 -translate-x-1/2" />

        <div className="space-y-32">
          {achievements.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 30%"],
  });

  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    isLeft ? [-40, 0] : [40, 0]
  );

  const rawOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);

  const x = useSpring(rawX, {
    stiffness: 60,
    damping: 25,
    mass: 1.2,
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 60,
    damping: 25,
  });

  return (
    <Motion.div
      ref={ref}
      style={{ x, opacity }}
      className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <div className="h-4 w-4 rounded-full bg-indigo-500 shadow-[0_0_16px_rgba(99,102,241,0.7)]" />
      </div>

      <div
        className="
          w-full md:w-[46%]
          rounded-xl
          bg-white dark:bg-black
          border border-black/20 dark:border-white/20
          p-6
          
        "
      >
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {item.date}
        </span>

        <h3 className="text-lg font-semibold text-black dark:text-white mt-1">
          {item.title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {item.subtitle}
        </p>

        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {item.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </Motion.div>
  );
}
