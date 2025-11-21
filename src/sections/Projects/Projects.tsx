// Projects.tsx
import styles from "./Projects.module.css";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../data/projets.ts";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Proyectos</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
