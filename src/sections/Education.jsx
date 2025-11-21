export default function Education() {
  return (
    <section
      id="education"
      className="section-container px-4 bg-gray-100 dark:bg-black transition-colors"
    >
      <h2 className="text-black dark:text-white text-3xl font-bold mb-6 text-center">
        Education
      </h2>

      <div className="max-w-4xl mx-auto bg-white dark:bg-white/5 border border-black/20 dark:border-white/20 p-6 rounded-xl flex items-center justify-between gap-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-white/10">
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
      </div>
    </section>
  );
}
