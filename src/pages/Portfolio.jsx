import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Rocket, Heart } from "lucide-react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
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

      <Navbar />

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

        {/* Work in Progress Section */}
        <section className="py-8 px-4">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
              Work in Progress
            </h2>
            
            <p className="text-base text-black/60 dark:text-white/60 mb-4">
              More exciting projects and features coming soon!
            </p>
            
            <div className="flex items-center justify-center gap-2 text-amber-500 dark:text-amber-400">
              
              <span className="text-sm font-medium">Stay tuned for updates</span>
            </div>
          </Motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 pb-24 px-4 border-t border-black/10 dark:border-white/10">
          <p className="text-black/60 dark:text-white/60 text-sm text-center flex flex-wrap items-center justify-center gap-1">
            <span className="whitespace-nowrap">© 2025 Shubhanshu Singh.</span>
            <span className="whitespace-nowrap flex items-center gap-1">Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /></span>
            <span className="whitespace-nowrap">All rights reserved.</span>
          </p>
        </footer>
      </main>
    </>
  );
}
