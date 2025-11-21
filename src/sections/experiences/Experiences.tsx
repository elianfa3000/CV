import Experience from "../../components/experience/Experience.tsx";
import experience from "../../data/experience.ts";
import styles from "./Experiences.module.css";
const experiences = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2>Experiencia</h2>
      <div className={styles.experiences}>
        {experience.map((expe, index) => (
          <Experience key={index} {...expe} />
        ))}
      </div>
    </section>
  );
};

export default experiences;
