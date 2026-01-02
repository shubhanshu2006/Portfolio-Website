import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Github, Activity } from "lucide-react";

export default function GitHubStats() {
  const [contributionData, setContributionData] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [streakLoading, setStreakLoading] = useState(true);
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const username = "shubhanshu2006";

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.contributions && Array.isArray(data.contributions)) {
          setContributionData(data);
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
      }
    };

    fetchContributions();
  }, [username]);

  const getStreakUrl = () => {
    const themeParam = theme === "dark" ? "dark" : "dark";
    return `https://github-streak-stats-eight.vercel.app/api?user=${username}&theme=${themeParam}&hide_border=false&date_format=M%20j%5B%2C%20Y%5D`;
  };

  const getColorForCount = (count) => {
    if (count === 0) return theme === "dark" ? "#161b22" : "#ebedf0";
    if (count < 3) return "#0e4429";
    if (count < 6) return "#006d32";
    if (count < 9) return "#26a641";
    return "#39d353";
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const renderContributionCalendar = () => {
    if (!contributionData) return null;

    const today = new Date();
    today.setHours(23, 59, 59, 999);

    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(today.getDate() - 364);

    const allContributions = contributionData.contributions.filter((day) => {
      const dayDate = new Date(day.date);
      return dayDate <= today;
    });

    const contributions = allContributions
      .filter((day) => {
        const dayDate = new Date(day.date);
        return dayDate >= oneYearAgo;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const firstDate = new Date(contributions[0]?.date);
    const dayOfWeek = firstDate.getDay();

    const emptyCells = [];
    for (let i = 0; i < dayOfWeek; i++) {
      emptyCells.push({ date: "", count: 0, isEmpty: true });
    }

    const allDays = [...emptyCells, ...contributions];

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      weeks.push(allDays.slice(i, i + 7));
    }

    const totalContributions = allContributions.reduce(
      (sum, day) => sum + day.count,
      0
    );

    return (
      <div className="relative">
        <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
            <Github className="w-5 h-5" />
            Contribution Activity
          </h3>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 dark:bg-green-400/10 rounded-lg">
            <Activity className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              {totalContributions.toLocaleString()} total contributions
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-1 overflow-x-auto pb-4 justify-center">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="relative group"
                    onMouseEnter={() => !day.isEmpty && setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    <div
                      className={`w-3 h-3 rounded-[3px] transition-all duration-200 ${
                        !day.isEmpty
                          ? "hover:ring-2 hover:ring-white/50 dark:hover:ring-black/50 cursor-pointer"
                          : ""
                      }`}
                      style={{
                        backgroundColor: day.isEmpty
                          ? "transparent"
                          : getColorForCount(day.count),
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {hoveredDay && !hoveredDay.isEmpty && (
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black dark:bg-zinc-800 text-white text-xs rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-10"
            >
              <div className="font-semibold">
                {hoveredDay.count}{" "}
                {hoveredDay.count === 1 ? "contribution" : "contributions"}
              </div>
              <div className="text-gray-300 text-[10px]">
                {formatDate(hoveredDay.date)}
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1px border-4 border-transparent border-t-black dark:border-t-zinc-800" />
            </Motion.div>
          )}

          <div className="flex items-center gap-2 mt-4 text-xs text-black/60 dark:text-white/60">
            <span>Less</span>
            {[0, 1, 3, 6, 9].map((level, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-[2px]"
                style={{ backgroundColor: getColorForCount(level) }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="github"
      className="section-container px-4 py-16 bg-transparent"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-400/10 mb-4">
            <Github className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              GitHub Activity
            </span>
          </div>
          <h2 className="text-black dark:text-white text-3xl md:text-4xl font-bold">
            Streak & Contributions
          </h2>
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group w-full max-w-2xl">
            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg overflow-hidden">
              <div className="absolute -inset-0.5 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />

              <div className="relative">
                {streakLoading && (
                  <div className="w-full h-48 bg-black/10 dark:bg-white/10 rounded-xl animate-pulse" />
                )}
                <img
                  key={getStreakUrl()}
                  src={getStreakUrl()}
                  alt="GitHub Streak Stats"
                  className={`w-full h-auto rounded-xl transition-opacity ${
                    streakLoading ? "opacity-0 absolute" : "opacity-100"
                  }`}
                  onLoad={() => setStreakLoading(false)}
                  onError={() => setStreakLoading(false)}
                />
              </div>
            </div>
          </div>
        </Motion.div>

        {contributionData && (
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-4xl">
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-black/10 dark:border-white/10 shadow-lg overflow-hidden">
                <div className="relative">{renderContributionCalendar()}</div>
              </div>
            </div>
          </Motion.div>
        )}
      </Motion.div>
    </section>
  );
}
