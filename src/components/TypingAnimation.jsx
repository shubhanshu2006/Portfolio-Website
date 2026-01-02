import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1200,
        "",
        400,
        "Problem Solver",
        1200,
        "",
        400,
      ]}
      speed={15}
      repeat={Infinity}
      cursor={true}
      wrapper="span"
      className="text-transparent font-bold text-3xl bg-clip-text bg-linear-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-600"
    />
  );
}
