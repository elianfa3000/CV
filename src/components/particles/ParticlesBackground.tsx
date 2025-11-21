import styles from "./ParticlesBackground.module.css";

export default function ParticlesBackground() {
  const particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push(
      <div
        key={i}
        className={styles.particle}
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 100}vh`, // ← Esto distribuye desde el inicio
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${15 + Math.random() * 10}s`,
        }}
      ></div>
    );
  }

  return <div className={styles.container}>{particles}</div>;
}
