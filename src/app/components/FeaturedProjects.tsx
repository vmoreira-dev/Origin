// app/components/FeaturedProjects.tsx
import { projects } from "../_data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="
        scroll-mt-32
        pt-32
        pb-40
        flex flex-col
        gap-20
      "
    >
      {/* Section header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Selected Work
        </h2>
        <span className="h-px w-12 bg-slate-300" />
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.href}
            title={project.title}
            tagline={project.tagline}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
