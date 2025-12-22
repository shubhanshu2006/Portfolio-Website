import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
import GmailIcon from "../assets/gmail.svg";

import { Sun, Moon, ChevronDown } from "lucide-react";

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <div className="hero-photo-wrapper">
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
          className="hero-greeting"
        >
          Hello, I'm
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hero-name-large"
        >
          Shubhanshu Singh
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="hero-tag-large"
        >
          Full-Stack Developer
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="hero-description"
        >
          Building scalable web applications with modern technologies.
          <br className="hidden md:block" />
          Passionate about clean code and great user experiences.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="hero-buttons"
        >
          <Motion.button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hero-btn-primary"
          >
            View Projects
          </Motion.button>

          <Motion.a
            href="/Resume.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hero-btn-secondary"
          >
            Resume
          </Motion.a>
        </Motion.div>
      </div>

      {/* Scroll indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="scroll-indicator"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
