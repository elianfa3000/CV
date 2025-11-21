// Footer.tsx
import { Mail, Linkedin, Github } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=farezelian24@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="Email"
        >
          <Mail />
        </a>

        <a
          href="https://www.linkedin.com/in/elian-fares-arias-89265b357/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="LinkedIn"
        >
          <Linkedin />
        </a>

        <a
          href="https://github.com/elianfa3000"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="GitHub"
        >
          <Github />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Elian Fares — Ingeniero en Tecnologías de
        la Información
      </p>
    </footer>
  );
}
