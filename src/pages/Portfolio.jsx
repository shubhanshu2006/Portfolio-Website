import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Heart } from "lucide-react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import CommandPalette from "../components/CommandPalette";
import GitHubStats from "../components/GitHubStats";
import HeroSection from "../sections/HeroSection";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Hackathons from "../sections/Hackathons";
import CodePhilosophy from "../sections/CodePhilosophy";
import CustomCursor from "../components/CustomCursor";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Analytics } from "@vercel/analytics/react";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      {!loaded && <Loader onLoadComplete={() => setLoaded(true)} />}
      <div className="fixed inset-0 -z-50">
        <AuroraBackground />
      </div>

      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <BackToTop />

      <main
        id="main-content"
        role="main"
        className="relative min-h-screen bg-transparent dark:bg-transparent"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        <HeroSection />
        <About />
        <Skills />
        <Work />
        <Education />
        <Achievements />
        <Hackathons />
        <CodePhilosophy />
        <Projects />
        <GitHubStats />

        <section className="py-8 px-4">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          ></Motion.div>
        </section>

        <footer className="py-14 pb-28 px-6 border-t border-black/8 dark:border-white/8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 mb-5">
              <span className="text-base font-black text-white tracking-tight">
                SS
              </span>
            </div>
            <p className="text-black/60 dark:text-white/60 text-sm font-medium flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="whitespace-nowrap font-semibold text-black/80 dark:text-white/80">
                Shubhanshu Singh
              </span>
              <span className="text-black/30 dark:text-white/30">·</span>
              <span className="whitespace-nowrap">Full Stack Developer</span>
              <span className="text-black/30 dark:text-white/30">·</span>
              <span className="whitespace-nowrap">
                © {new Date().getFullYear()}
              </span>
            </p>
            <p className="text-black/35 dark:text-white/35 text-xs tracking-wider uppercase">
              Made with{" "}
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400 animate-pulse inline-block mx-0.5" />
            </p>
          </Motion.div>
        </footer>
      </main>
      <Analytics />
    </>
  );
}
