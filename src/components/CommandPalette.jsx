import { useState, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Home,
  User,
  Briefcase,
  GraduationCap,
  Award,
  FolderGit2,
  Github,
} from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Briefcase },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Achievements", href: "#achievements", icon: Award },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "GitHub", href: "#github", icon: Github },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = navigationItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const currentSelectedIndex = Math.min(
    selectedIndex,
    filteredItems.length - 1
  );

  const navigateToSection = useCallback((href) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setSearch("");
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      if (e.key === "Enter" && filteredItems[currentSelectedIndex]) {
        e.preventDefault();
        navigateToSection(filteredItems[currentSelectedIndex].href);
      }
    },
    [isOpen, filteredItems, currentSelectedIndex, navigateToSection]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-200"
          />

          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-201 px-4"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-4 border-b border-black/10 dark:border-white/10">
                <Search className="w-5 h-5 text-black/40 dark:text-white/40" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search navigation..."
                  className="flex-1 bg-transparent text-black dark:text-white outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-black/40 dark:text-white/40" />
                </button>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {filteredItems.length === 0 ? (
                  <div className="px-4 py-8 text-center text-black/40 dark:text-white/40">
                    No results found
                  </div>
                ) : (
                  <div className="py-2">
                    {filteredItems.map((item, index) => {
                      const Icon = item.icon;
                      const isSelected = currentSelectedIndex === index;
                      return (
                        <Motion.button
                          key={item.href}
                          onClick={() => navigateToSection(item.href)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                            isSelected
                              ? "bg-blue-500/10 dark:bg-blue-400/10"
                              : "hover:bg-black/5 dark:hover:bg-white/5"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              isSelected
                                ? "text-blue-500 dark:text-blue-400"
                                : "text-black/40 dark:text-white/40"
                            }`}
                          />
                          <span
                            className={`font-medium ${
                              isSelected
                                ? "text-blue-500 dark:text-blue-400"
                                : "text-black dark:text-white"
                            }`}
                          >
                            {item.name}
                          </span>
                        </Motion.button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-black/10 dark:border-white/10 flex items-center gap-4 text-xs text-black/40 dark:text-white/40">
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10">
                    ↑↓
                  </kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10">
                    ↵
                  </kbd>
                  <span>Select</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10">
                    ESC
                  </kbd>
                  <span>Close</span>
                </div>
              </div>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
