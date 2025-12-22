import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
import GmailIcon from "../assets/gmail.svg";

import { Sun, Moon } from "lucide-react";

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
    <section className="hero-section bg-white dark:bg-black">
      <div className="hero-glow" />

      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center w-full"
      >
        <img
          src="/Profile.jpg"
          alt="Shubhanshu Singh"
          className="photo-placeholder object-cover object-center border border-black/40 dark:border-white"
          style={{ marginBottom: "1.2rem" }}
        />
      </Motion.div>

      <Motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="hero-name text-black dark:text-white"
      >
        Shubhanshu Singh
      </Motion.h1>

      <Motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="hero-tag text-black/60 dark:text-white/70"
      >
        Full-Stack Developer
      </Motion.p>

      <Motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <Motion.a
          href="#projects"
          whileHover={{
            y: -2,
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="px-6 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium"
        >
          View Projects
        </Motion.a>

        <Motion.a
          href="/Resume.pdf"
          whileHover={{
            y: -2,
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(255,255,255,0.15)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="px-6 py-2 rounded-md border border-black/30 dark:border-white/30 text-black dark:text-white font-medium"
        >
          Resume
        </Motion.a>
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
            href="mailto:shubhanshus450@gmail.com"
            className="social-item"
            data-label="Mail"
          >
            <img src={GmailIcon} className="w-6 h-6 dark:invert" />
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
