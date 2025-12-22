import React, { useState } from "react";
import Loader from "../components/Loader";
import HeroSection from "../sections/HeroSection";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onLoadComplete={() => setLoaded(true)} />}
      <div className="fixed inset-0 -z-50">
        <AuroraBackground />
      </div>

      <main
        className="relative min-h-screen bg-transparent dark:bg-transparent"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        <HeroSection />
        <About />
        <Skills />
        <Work />
        <Education />
        <Achievements />
        <Projects />

        <h1 className="mb-2 text-3xl text-center bg-transparent text-black dark:bg-transparent dark:text-white">
          This Website is still in Progress...
        </h1>

        <h1 className="text-2xl text-center bg-transparent text-black/90 dark:bg-transparent dark:text-white/90">
          Projects will be added soon...
        </h1>

        <footer
          className="py-6 pb-24 text-center 
          bg-transparent text-black 
          dark:bg-transparent dark:text-white"
        >
          © 2025 Shubhanshu Singh. All rights reserved.
        </footer>
      </main>
    </>
  );
}
