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

        <section className="py-8 px-4">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          ></Motion.div>
        </section>

        <footer className="py-12 pb-24 -mt-16 px-4 border-t border-black/10 dark:border-white/10 bg-linear-to-t from-black/5 dark:from-white/5 to-transparent">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-black/70 dark:text-white/70 text-base font-medium flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="whitespace-nowrap">
                © 2025 Shubhanshu Singh.
              </span>
              <span className="whitespace-nowrap flex items-center gap-1.5">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              </span>
              <span className="whitespace-nowrap">All rights reserved.</span>
            </p>
            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-black/50 dark:text-white/50 text-sm"
            ></Motion.p>
          </Motion.div>
        </footer>
      </main>
    </>
  );
}
