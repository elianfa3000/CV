// About.tsx
import styles from "./About.module.css";
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiExpress,
  SiVite,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import type { IconType } from "react-icons";

export default function About() {
  type TechItem = {
    Icon: IconType;
    color: string;
  };
  const technologies: TechItem[] = [
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiHtml5, color: "#E34F26" },
    { Icon: SiCss3, color: "#1572B6" },
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiAngular, color: "red" },
    { Icon: SiNodedotjs, color: "#339933" },
    { Icon: SiExpress, color: "#828282" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiDocker, color: "#2496ED" },
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiVite, color: "#646CFF" },
    { Icon: SiVercel, color: "#000000" },
    { Icon: SiPostman, color: "#FF6C37" },
  ];

  // Mezclar aleatoriamente
  const shuffle = (arr: TechItem[]) => arr.sort(() => Math.random() - 0.5);

  const rows = [
    shuffle([...technologies]),
    shuffle([...technologies]),
    shuffle([...technologies]),
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Acerca de mí</h2>
          <p>
            Soy <strong>Ingeniero en Tecnologías de la Información</strong> con
            interés en construir soluciones digitales que combinen diseño,
            funcionalidad y propósito. Me gusta aprender nuevas tecnologías y
            adaptarlas a diferentes tipos de proyectos, buscando siempre una
            experiencia práctica y bien pensada. Disfruto trabajar en entornos
            donde la creatividad y la lógica se encuentran, y donde cada línea
            de código aporta valor real.
          </p>
          <p>
            A lo largo de mi formación y proyectos personales he utilizado
            herramientas y tecnologías modernas del entorno web, que me permiten
            seguir creciendo y perfeccionando mis habilidades como
            desarrollador.
          </p>
        </div>

        {/* CARRUSELES */}
        <div className={styles.carouselWrapper}>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`${styles.carouselRow} ${
                i % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.track}>
                {row.map((tech, j) => (
                  <tech.Icon
                    key={`${i}-${j}`}
                    className={styles.icon}
                    style={{ color: tech.color }}
                  />
                ))}

                {/* Copia para loop infinito */}
                {row.map((tech, j) => (
                  <tech.Icon
                    key={`dup-${i}-${j}`}
                    className={styles.icon}
                    style={{ color: tech.color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
