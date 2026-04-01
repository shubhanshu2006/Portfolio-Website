import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
      >
        <div className="max-w-[95%] lg:max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between p-2 pl-3 rounded-[2rem] md:rounded-full transition-all duration-500 ease-out will-change-[background-color,backdrop-filter,box-shadow,border] border ${isScrolled
                ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-black/10 dark:border-white/10"
                : "bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm border-black/5 dark:border-white/5"
              }`}
          >
            {/* Logo Section */}
            <Motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="relative group shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-[14px] bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-md group-hover:shadow-indigo-500/50 transition-shadow duration-300 relative z-10">
                <span className="text-base font-black text-white tracking-tight">
                  SS
                </span>
              </div>
              <div className="absolute -inset-1 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-[16px] blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
            </Motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 ml-auto mr-2">
              {navLinks.map((link) => (
                <Motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3 py-2 text-[13px] font-semibold rounded-full transition-all duration-200 ${activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection === link.href.substring(1) && (
                    <Motion.div
                      layoutId="activeNavSection"
                      className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full -z-10 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.name}
                </Motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Motion.button
                className="p-2 mr-1 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Motion.button>
            </div>
          </div>
        </div>
      </Motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col py-4 px-3 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, index) => (
                <Motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-5 py-3.5 mb-1 rounded-2xl text-left text-sm font-bold transition-all ${activeSection === link.href.substring(1)
                      ? "text-white bg-linear-to-r from-blue-500 to-indigo-500 shadow-md"
                      : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10"
                    }`}
                >
                  {link.name}
                </Motion.button>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
