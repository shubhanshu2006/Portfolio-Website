import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1400,
        "",
        300,
        "Problem Solver",
        1400,
        "",
        300,
      ]}
      speed={20}
      repeat={Infinity}
      cursor={true}
      wrapper="span"
      className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400"
    />
  );
}
