export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "TailwindCSS",
    "SQL",
    "MongoDB",
    "Git",
  ];

  return (
    <section
      id="skills"
      className="section-container px-4 bg-gray-100 dark:bg-black transition-colors"
    >
      <h2 className="text-black dark:text-white text-3xl font-bold mb-4 text-center">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <div
            key={i}
            className="
              px-4 py-2.5
              rounded-lg
              border border-black/20 dark:border-white/20
              bg-white dark:bg-white/5
              text-black dark:text-white
              text-[15px] font-medium
              text-center
              transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-white/10
            "
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
