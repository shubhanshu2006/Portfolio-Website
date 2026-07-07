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
      className="text-transparent font-bold bg-clip-text bg-linear-to-r from-orange-700 via-amber-700 to-yellow-700 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400"
    />
  );
}
