import React, { useEffect, useState } from "react";

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
    <section className="hero-section bg-white dark:bg-black ">
      <div className="hero-glow"></div>

      <div
        className="flex justify-center w-full fade-up"
        style={{ animationDelay: "0ms" }}
      >
        <img
          src="/Profile.jpg"
          alt="Shubhanshu Singh"
          className="photo-placeholder object-cover object-center border border-black/40 dark:border-white "
          style={{ marginBottom: "1.2rem" }}
        />
      </div>

      <h1
        className="hero-name fade-up text-black dark:text-white "
        style={{ animationDelay: "120ms" }}
      >
        Shubhanshu Singh
      </h1>

      <p
        className="hero-tag fade-up text-black/10 dark:text-white "
        style={{ animationDelay: "240ms" }}
      >
        Full Stack Developer
      </p>

      <div className={`social-fixed ${showSocials ? "social-show" : ""}`}>
        <div className="social-bar">
          <a
            href="https://github.com/shubhanshu2006"
            target="_blank"
            className="social-item"
            data-label="GitHub"
          >
            <img
              src={GithubIcon}
              className="w-6 h-6 object-contain dark:invert"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhanshu-singh-684131333/"
            target="_blank"
            className="social-item"
            data-label="LinkedIn"
          >
            <img
              src={LinkedinIcon}
              className="w-6 h-6 object-contain dark:invert"
            />
          </a>

          <a
            href="https://x.com/Shubhanshu__10"
            target="_blank"
            className="social-item"
            data-label="X"
          >
            <img src={XIcon} className="w-6 h-6 object-contain dark:invert" />
          </a>

          <a
            href="mailto:shubhanshus450@gmail.com"
            target="_blank"
            className="social-item"
            data-label="Mail"
          >
            <img
              src={GmailIcon}
              className="w-6 h-6 object-contain dark:invert"
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