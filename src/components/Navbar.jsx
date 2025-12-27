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
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-full
  transition-[background-color,backdrop-filter,box-shadow]
  duration-500 ease-out
  will-change-[background-color,backdrop-filter]
  ${
    isScrolled
      ? "bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/30"
      : "bg-transparent"
  }`}
          >
            {/* Logo */}
            <Motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
                <span className="text-xl font-black text-white tracking-tight">
                  SS
                </span>
              </div>
              <div className="absolute -inset-1 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </Motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full p-1">
              {navLinks.map((link) => (
                <Motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection === link.href.substring(1) && (
                    <Motion.div
                      layoutId="activeNavSection"
                      className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full -z-10"
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

            {/* Mobile Menu Button */}
            <Motion.button
              className="md:hidden p-2 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Motion.button>
          </div>
        </div>
      </Motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link, index) => (
                <Motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-6 py-3 text-left text-base font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? "text-white bg-linear-to-r from-blue-500 to-indigo-500"
                      : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
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
