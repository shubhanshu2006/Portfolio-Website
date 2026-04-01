import React, { useEffect, useState } from "react";
import { motion as Motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  // Increased stiffness and damping for tighter, faster follow (reduced gap/lag)
  const ringXSpring = useSpring(ringX, {
    damping: 35,
    stiffness: 1400,
    mass: 0.1,
  });
  const ringYSpring = useSpring(ringY, {
    damping: 35,
    stiffness: 1400,
    mass: 0.1,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-trigger")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <Motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-black dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 40,
        }}
      />
      <Motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-black/20 dark:border-white/20 rounded-full pointer-events-none z-[9998] hidden md:block pointer-events-none"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 28,
        }}
      />
    </>
  );
}
