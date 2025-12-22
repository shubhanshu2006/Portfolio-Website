export default function About() {
  return (
    <section
      id="about"
      className="section-container px-4 py-12 bg-gray-100 dark:bg-black transition-colors"
    >
      <h2 className="text-black dark:text-white text-4xl font-bold mb-4 text-center">
        About Me
      </h2>

      <p
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
      </p>
    </section>
  );
}
