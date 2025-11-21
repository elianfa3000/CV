import styles from "./Experience.module.css";
interface ExperienceProps {
  title: string;
  role: string;
  description: string[];
  /* period: string;*/
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  role,
  description,
  /* period,*/
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.role}>{role}</h4>

      <div className={styles.innerBox}>
        {description.map((line, i) => (
          <p key={i} className={styles.description}>
            • {line}
          </p>
        ))}
      </div>

      {/*<span className={styles.period}>{period}</span>*/}
    </div>
  );
};

export default Experience;
