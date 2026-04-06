import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";

import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
import GmailIcon from "../assets/gmail.svg";

import { Sun, Moon, ChevronDown, Rocket, Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (!saved) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    const t = setTimeout(() => setShowSocials(true), 400);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 md:px-8 py-20">
      {/* Premium Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-500/20 dark:via-indigo-500/20 dark:to-purple-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Hero Content Container - Centered between Navbar and Bottom Bar */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto z-10 pt-4">

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center w-full mb-3 md:mb-4"
        >
          {/* Avatar size increased back up */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-full shadow-2xl p-1.5 z-10 border border-black/5 dark:border-white/10">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/Profile.jpg"
                  alt="Shubhanshu Singh"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <Motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, ease: "easeInOut" }}
                className="absolute bottom-0 -right-2 bg-white dark:bg-zinc-800 p-2 rounded-full shadow-xl border border-black/5 dark:border-white/10 z-20"
              >
                <span className="text-xl leading-none block">👋</span>
              </Motion.div>
            </div>
          </div>
        </Motion.div>

        {/* Premium Badge */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center w-full mb-3"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md transition-all cursor-default">
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-xs font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">
              Hello World, I am
            </span>
          </div>
        </Motion.div>

        {/* Name */}
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-black dark:text-white mb-2 tracking-tighter text-center leading-[1.1]"
        >
          Shubhanshu Singh.
        </Motion.h1>

        {/* Tagline */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl font-bold text-black/80 dark:text-white/80 mb-3 h-8 flex items-center justify-center text-center"
        >
          <TypingAnimation />
        </Motion.div>

        {/* Description */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-2xl text-center mb-6 px-4"
        >
          Building scalable web applications with modern technologies.
          <br className="hidden md:block" />
          Passionate about clean code and great user experiences.
        </Motion.p>

        {/* Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 px-4"
        >
          <Motion.button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ y: 0 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6 }}
            className="relative group w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transition-shadow duration-300 overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2 text-sm md:text-base">
              View Projects <Rocket className="w-5 h-5 ml-1" />
            </span>
          </Motion.button>

          <Motion.a
            href="https://drive.google.com/file/d/1Ewq03smjj89XH74w27U62OBqM8QTQNRb/view?usp=drive_linkg"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 0 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.5 }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-black dark:text-white bg-white/10 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-md transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            View Resume <Download className="w-4 h-4 ml-1" />
          </Motion.a>
        </Motion.div>

        {/* Safe Scroll Down Indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 md:mt-8 cursor-pointer flex flex-col items-center group pointer-events-auto z-20 pb-16 md:pb-8"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1.5 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-300">
            Scroll Down
          </span>
          <Motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white dark:bg-zinc-800 p-1 rounded-full border border-black/5 dark:border-white/10 shadow-sm"
          >
            <ChevronDown className="w-3.5 h-3.5 text-black/60 dark:text-white/60" />
          </Motion.div>
        </Motion.div>
      </div>

      {/* Kept original social bar structure requested by user */}
      <div className={`social-fixed ${showSocials ? "social-show" : ""}`}>
        <div className="social-bar">
          <a
            href="https://github.com/shubhanshu2006"
            target="_blank"
            className="social-item hover:scale-110 hover:-translate-y-1 transition-transform"
            data-label="GitHub"
          >
            <img src={GithubIcon} className="w-5 h-5 dark:invert" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhanshu-singh-684131333/"
            target="_blank"
            className="social-item hover:scale-110 hover:-translate-y-1 transition-transform"
            data-label="LinkedIn"
          >
            <img src={LinkedinIcon} className="w-5 h-5 dark:invert" />
          </a>

          <a
            href="https://x.com/Shubhanshu__10"
            target="_blank"
            className="social-item hover:scale-110 hover:-translate-y-1 transition-transform"
            data-label="X"
          >
            <img src={XIcon} className="w-5 h-5 dark:invert" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=shubhanshus450@gmail.com"
            target="_blank"
            className="social-item hover:scale-110 hover:-translate-y-1 transition-transform"
            data-label="Mail"
          >
            <img
              src={GmailIcon}
              className="w-5 h-5 dark:invert cursor-pointer"
            />
          </a>

          <button
            onClick={toggleTheme}
            className="social-item hover:scale-110 hover:-translate-y-1 transition-transform"
            data-label="Theme"
          >
            <Sun className="icon dark:hidden text-black" />
            <Moon className="icon hidden dark:block text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
