import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Alpha",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added","To be added","To be added","To be added"],
      site: "#",
      repo: "#",
      img:"/Coming_Soon.jpg",
    },
    {
      title: "Beta",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added","To be added","To be added","To be added"],
      site: "#",
      repo: "#",
      img:"/Coming_Soon.jpg",
    },
    {
      title: "Gamma",
      year: "2025",
      desc: "To be added soon...",
      tech: ["To be added","To be added","To be added","To be added"],
      site: "#",
      repo: "#",
      img:"/Coming_Soon.jpg",
    },
  ];

  return (
    <section id="projects" className="section-container px-4">
      <h2 className="text-black dark:text-white text-4xl font-bold mb-6 text-center">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
