import React, { useState, useEffect } from "react";

export default function Loader({ onLoadComplete = () => {} }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const names = [
    { text: "LOADING" },
    { text: "SETTING THINGS UP" },
    { text: "ALMOST THERE" },
    { text: "READY!" },
    { text: "WELCOME TO SHUBHANSHU'S PORTFOLIO" },
  ];

  useEffect(() => {
    const displayIndex = currentIndex - 1;

    const lastMessageIndex = names.length - 1;

    if (currentIndex <= names.length) {
      const delay = displayIndex === lastMessageIndex ? 1000 : 450;

      const t = setTimeout(() => {
        setCurrentIndex((i) => i + 1);
      }, delay);

      return () => clearTimeout(t);
    }

    const to = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadComplete, 1000);
    }, 400);

    return () => clearTimeout(to);
  }, [currentIndex, names.length, onLoadComplete]);

  return (
    <div
      className={
        "fixed inset-0 z-9999 flex items-center justify-center bg-black transition-opacity duration-1000 " +
        (isExiting ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      <div className="relative">
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="h-20 md:h-28 flex items-center justify-center">
            {names.map((n, i) => (
              <div
                key={i}
                className={
                  "absolute transition-all duration-700 " +
                  (i === currentIndex - 1
                    ? "opacity-100 scale-100"
                    : i < currentIndex - 1
                    ? "opacity-0 scale-90 -translate-y-12 blur-sm"
                    : "opacity-0 scale-110 translate-y-12 blur-sm")
                }
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
                  {n.text}
                </h1>
              </div>
            ))}
          </div>

          <div className="flex gap-1.5 md:gap-2 justify-center mt-10 md:mt-14">
            {names.map((_, i) => (
              <div
                key={i}
                className={
                  "h-1 md:h-1.5 rounded-full transition-all " +
                  (i < currentIndex
                    ? "w-6 md:w-8 bg-blue-400"
                    : "w-1 md:w-1.5 bg-gray-700")
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-1 md:gap-1.5">
        <div
          className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}
