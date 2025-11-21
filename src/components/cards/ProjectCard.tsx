import { SiGit } from "react-icons/si";
import styles from "./ProjectCard.module.css";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;

  repositories?: {
    frontEnd?: string;
    backEnd?: string;
  };

  deploy?: {
    frontEnd?: string;
    backEnd?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  repositories,
  deploy,
}: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className={styles.buttons}>
          {link && (
            <button>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </button>
          )}
          {repositories?.frontEnd && (
            <button>
              <a
                href={repositories.frontEnd}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGit />
                frontEnd{" "}
                <span className={styles.deployText}>
                  {`-->[${deploy?.frontEnd}]`}
                </span>
              </a>
            </button>
          )}
          {repositories?.backEnd && (
            <button>
              <a
                href={repositories.backEnd}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGit />
                backEnd{" "}
                <span className={styles.deployText}>
                  {`-->[${deploy?.backEnd}]`}
                </span>
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
