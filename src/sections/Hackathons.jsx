import React from "react";
import { motion as Motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function Hackathons() {
  const row1 = ["/India_Innovates_1.jpeg", "/India_Innovates_3.jpeg"];

  const row2 = ["India_Innovates_2.jpeg", "RIFT_1.jpeg"];

  return (
    <section
      id="hackathons"
      className="section-container px-4 py-32 bg-transparent overflow-hidden"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mb-4">
          <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Beyond the Screen
          </span>
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
          Hackathons & IRL
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          Building things, meeting people, and winning caffeine-fueled
          hackathons.
        </p>
      </Motion.div>

      <div className="relative w-full flex flex-col gap-6 -mx-4 md:-mx-8">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10"></div>

        {/* Row 1: Left */}
        <div className="flex w-full overflow-hidden">
          <Motion.div
            className="flex gap-6 whitespace-nowrap px-3 w-max shrink-0"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...row1, ...row1, ...row1].map((src, i) => (
              <div
                key={i}
                className="relative w-80 h-56 shrink-0 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl bg-black/10 dark:bg-white/5"
              >
                {/* Backing blur to fill the card beautifully without cropping main subject */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={src}
                    className="w-full h-full object-cover blur-xl opacity-50 scale-125 saturate-150"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm" />
                </div>
                <img
                  src={src}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  alt="Hackathon"
                />
              </div>
            ))}
          </Motion.div>
        </div>

        {/* Row 2: Right */}
        <div className="flex w-full overflow-hidden">
          <Motion.div
            className="flex gap-6 whitespace-nowrap px-3 w-max shrink-0"
            animate={{ x: ["-33.333333%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...row2, ...row2, ...row2].map((src, i) => (
              <div
                key={i}
                className="relative w-72 h-48 shrink-0 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl bg-black/10 dark:bg-white/5"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={src}
                    className="w-full h-full object-cover blur-xl opacity-50 scale-125 saturate-150"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm" />
                </div>
                <img
                  src={src}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  alt="Hackathon"
                />
              </div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
