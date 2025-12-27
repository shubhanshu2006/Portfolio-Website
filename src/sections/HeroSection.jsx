import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
import GmailIcon from "../assets/gmail.svg";

import { Sun, Moon, ChevronDown, Rocket } from "lucide-react";

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
    <section id="home" className="hero-section-full">
      <div className="hero-content">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <div className="hero-photo-wrapper mt-0">
            <img
              src="/Profile.jpg"
              alt="Shubhanshu Singh"
              className="hero-photo"
            />
            <div className="hero-photo-ring" />
          </div>
        </Motion.div>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hero-greeting text-lg md:text-xl text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 mb-0"
        >
          Hey there! 👋 I'm
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hero-name-large text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 mb-0"
        >
          Shubhanshu Singh
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="hero-tag-large text-2xl md:text-3xl font-bold text-black dark:text-white -mb-40"
        >
          Full-Stack Developer
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="hero-description text-lg md:text-xl text-black/70 dark:text-white/70 leading-relaxed max-w-2xl -mb-20"
        >
          Building scalable web applications with modern technologies.
          <br className="hidden md:block" />
          Passionate about clean code and great user experiences.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="hero-buttons flex gap-4 flex-wrap"
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
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.6,
            }}
            className="relative group px-8 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transition-shadow duration-300 will-change-transform overflow-hidden"
          >
           
            <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-300" />{" "}
            <div className="absolute inset-0 bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />{" "}
            <span className="relative flex items-center gap-2">
              
              View Projects
            </span>
          </Motion.button>
          <Motion.a
            href="/Resume.pdf"
            initial={{ y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              mass: 0.5,
            }}
            className="px-8 py-4 rounded-xl font-semibold 
    text-black dark:text-white 
    bg-white/10 dark:bg-white/5 
    border-2 border-black/20 dark:border-white/20 
    hover:border-black/50 dark:hover:border-white/50 
    hover:bg-white/20 dark:hover:bg-white/10 
    backdrop-blur-sm
    transition-colors duration-300
    will-change-transform"
          >
            Download Resume
          </Motion.a>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="scroll-indicator"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="scroll-text">Scroll Down</span>
        <Motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="scroll-arrow" />
        </Motion.div>
      </Motion.div>

      <div className={`social-fixed ${showSocials ? "social-show" : ""}`}>
        <div className="social-bar">
          <a
            href="https://github.com/shubhanshu2006"
            target="_blank"
            className="social-item"
            data-label="GitHub"
          >
            <img src={GithubIcon} className="w-6 h-6 dark:invert" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhanshu-singh-684131333/"
            target="_blank"
            className="social-item"
            data-label="LinkedIn"
          >
            <img src={LinkedinIcon} className="w-6 h-6 dark:invert" />
          </a>

          <a
            href="https://x.com/Shubhanshu__10"
            target="_blank"
            className="social-item"
            data-label="X"
          >
            <img src={XIcon} className="w-6 h-6 dark:invert" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=shubhanshus450@gmail.com"
            target="_blank"
            className="social-item"
            data-label="Mail"
          >
            <img
              src={GmailIcon}
              className="w-6 h-6 dark:invert cursor-pointer"
            />
          </a>

          <button
            onClick={toggleTheme}
            className="social-item"
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
