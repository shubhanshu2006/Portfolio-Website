import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-black/5 dark:bg-white/5"
      style={{ zIndex: 100 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Motion.div
        className="h-full bg-linear-to-r from-blue-500  to-purple-500 shadow-lg shadow-blue-500/50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </Motion.div>
  );
}
