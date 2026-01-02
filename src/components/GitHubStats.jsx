import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  Github,
  Activity,
  TrendingUp,
  Flame,
  Trophy,
  Calendar,
} from "lucide-react";

const getLastYearDays = (days) => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const oneYearAgo = new Date(today);
  oneYearAgo.setDate(today.getDate() - 364);

  return days.filter((d) => {
    const date = new Date(d.date);
    return date >= oneYearAgo && date <= today;
  });
};

const getCurrentStreak = (days) => {
  let streak = 0;
  const today = new Date().toISOString().slice(0, 10);

  const sortedDays = [...days].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  for (let i = sortedDays.length - 1; i >= 0; i--) {
    const day = sortedDays[i];

    if (day.date === today && day.count === 0) continue;

    if (day.count > 0) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

const getLongestStreak = (days) => {
  let max = 0;
  let current = 0;

  for (const day of days) {
    if (day.count > 0) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }

  return max;
};

// eslint-disable-next-line no-unused-vars
function StatCard({ icon: Icon, label, value, bgColor, delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-zinc-900/90 dark:bg-zinc-900/40 backdrop-blur-2xl p-8 transition-all duration-500 group-hover:border-black/10 dark:group-hover:border-white/20 group-hover:bg-black dark:group-hover:bg-zinc-900/60 shadow-2xl shadow-black/20 dark:shadow-black/50">
        <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />
        <div
          className={`absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-40 dark:group-hover:opacity-30 ${bgColor} blur-3xl -z-10`}
        />

        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 dark:via-white/20 to-transparent" />

        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div
              className={`absolute inset-0 blur-2xl opacity-40 dark:opacity-50 ${bgColor}`}
            />
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <Icon
                className="w-5 h-5 text-white/90 dark:text-white/80"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <div className="text-center space-y-1">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white/60 transition-colors duration-500">
              {label}
            </p>
            <p className="text-4xl font-extralight text-white tracking-tight drop-shadow-md">
              {value}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </Motion.div>
  );
}

export default function GitHubStats() {
  const [contributionData, setContributionData] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
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

  const getColorForCount = (count) => {
    if (count === 0) return theme === "dark" ? "#161b22" : "#ebedf0";
    if (count < 3) return theme === "dark" ? "#0e4429" : "#9be9a8";
    if (count < 6) return theme === "dark" ? "#006d32" : "#40c463";
    if (count < 9) return theme === "dark" ? "#26a641" : "#30a14e";
    return theme === "dark" ? "#39d353" : "#216e39";
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

    return (
      <div className="relative pt-4">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl font-bold text-black dark:text-white flex items-center gap-3">
            <div className="p-2 rounded-lg bg-linear-to-br from-green-500 to-emerald-600">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            Contribution Activity
          </h3>
        </div>

        <div className="relative overflow-visible">
          <div className="flex gap-0 overflow-x-auto pb-4 pr-4 pt-2 px-2 justify-center">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-0">
                {week.map((day, dayIndex) => (
                  <Motion.div
                    key={dayIndex}
                    className="relative group p-0.5"
                    onMouseEnter={() => !day.isEmpty && setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    whileHover={!day.isEmpty ? { scale: 1.5, zIndex: 10 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded transition-all duration-200 ${
                        !day.isEmpty
                          ? "hover:ring-2 hover:ring-offset-2 hover:ring-green-500 dark:hover:ring-green-400 cursor-pointer hover:shadow-lg"
                          : ""
                      }`}
                      style={{
                        backgroundColor: day.isEmpty
                          ? "transparent"
                          : getColorForCount(day.count),
                      }}
                    />
                  </Motion.div>
                ))}
              </div>
            ))}
          </div>

          {hoveredDay && !hoveredDay.isEmpty && (
            <Motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 bg-linear-to-br from-black to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 text-white text-xs rounded-xl shadow-2xl whitespace-nowrap pointer-events-none z-20 border border-white/10"
            >
              <div className="font-bold text-sm">
                {hoveredDay.count}{" "}
                {hoveredDay.count === 1 ? "contribution" : "contributions"}
              </div>
              <div className="text-gray-300 text-[11px] mt-1">
                {formatDate(hoveredDay.date)}
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900" />
              </div>
            </Motion.div>
          )}

          <div className="flex items-center justify-center gap-2 mt-6 text-xs font-medium text-black/70 dark:text-white/70">
            <span>Less</span>
            {[0, 1, 3, 6, 9].map((level, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.5 }}
                className="w-3 h-3 rounded-[3px] cursor-pointer shadow-sm"
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
      className="section-container px-4 py-20 bg-transparent relative overflow-hidden"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <Motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 dark:from-green-400/20 dark:via-emerald-400/20 dark:to-teal-400/20 mb-6 border border-green-500/30 dark:border-green-400/30 backdrop-blur-sm"
          >
            <Github className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
              GitHub Activity
            </span>
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-3"
          >
            Streak & Contributions
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black/60 dark:text-white/60 max-w-2xl mx-auto"
          >
            Track my coding journey with real-time GitHub statistics and
            contribution patterns
          </Motion.p>
        </div>

        {contributionData &&
          (() => {
            const lifetimeTotal = Object.values(
              contributionData.total || {}
            ).reduce((sum, v) => sum + v, 0);

            const lastYearDays = getLastYearDays(
              contributionData.contributions
            );

            const lastYearTotal = lastYearDays.reduce(
              (sum, d) => sum + d.count,
              0
            );

            const currentStreak = getCurrentStreak(lastYearDays);
            const longestStreak = getLongestStreak(
              contributionData.contributions
            );

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-2">
                <StatCard
                  icon={Trophy}
                  label="Total Contributions"
                  value={lifetimeTotal.toLocaleString()}
                  bgColor="bg-linear-to-br from-green-500 to-emerald-600"
                  delay={0}
                />
                <StatCard
                  icon={TrendingUp}
                  label="Last Year"
                  value={lastYearTotal.toLocaleString()}
                  bgColor="bg-linear-to-br from-blue-500 to-cyan-600"
                  delay={0.1}
                />
                <StatCard
                  icon={Flame}
                  label="Current Streak"
                  value={`${currentStreak} days`}
                  bgColor="bg-linear-to-br from-orange-500 to-red-600"
                  delay={0.2}
                />
                <StatCard
                  icon={Activity}
                  label="Longest Streak"
                  value={`${longestStreak} days`}
                  bgColor="bg-linear-to-br from-purple-500 to-pink-600"
                  delay={0.3}
                />
              </div>
            );
          })()}

        {contributionData && (
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-5xl">
              <div className="absolute -inset-1 bg-linear-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

              <div className="relative bg-white dark:bg-zinc-950 backdrop-blur-xl rounded-3xl p-8 border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-green-500/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-emerald-500/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative">{renderContributionCalendar()}</div>
              </div>
            </div>
          </Motion.div>
        )}
      </Motion.div>
    </section>
  );
}
