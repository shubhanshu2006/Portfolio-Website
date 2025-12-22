import { motion as Motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="section-container px-4 py-16 bg-gray-100 dark:bg-black transition-colors"
    >
      <Motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black dark:text-white text-4xl font-bold mb-6 text-center"
      >
        Education
      </Motion.h2>

      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-white dark:bg-black border border-black/20 dark:border-white/20 p-7 rounded-xl flex items-center justify-between gap-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
      >
        <a
          href="https://www.rkgit.edu.in"
          target="_blank"
          className="flex items-center gap-4 hover:opacity-90 transition"
        >
          <img
            src="/Logo.png"
            alt="College Logo"
            className="w-14 h-14 rounded-full bg-white p-1 object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Raj Kumar Goel Institute of Technology
            </h3>
            <p className="text-black/70 dark:text-white/70">
              B.Tech — Computer Science and Engineering
            </p>
          </div>
        </a>

        <div className="text-right flex flex-col items-end gap-1">
          <p className="text-black dark:text-white font-medium text-lg">
            2024 - 2028
          </p>

          <p className="text-black/70 dark:text-white/70 text-sm mt-1">
            CGPA: 9.47/10
          </p>
        </div>
      </Motion.div>
    </section>
  );
}
