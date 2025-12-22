import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="section-container px-4 py-12 bg-gray-100 dark:bg-black transition-colors"
    >
      <Motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black dark:text-white text-4xl font-bold mb-4 text-center"
      >
        About Me
      </Motion.h2>

      <Motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-3xl mx-auto
          text-center
          text-2xl
          leading-relaxed
          font-base
          text-black/90 dark:text-white/90"
      >
        I am a Computer Science Engineering student and full-stack developer
        with practical experience in modern web technologies such as JavaScript,
        TypeScript, React, Node.js, and Python. I specialize in building
        scalable, maintainable applications while emphasizing clean
        architecture, performance, and reliability.
      </Motion.p>
    </section>
  );
}
