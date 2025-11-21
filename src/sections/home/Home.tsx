// Home.tsx
import { FileDown } from "lucide-react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";
import img from "../../assets/Elian.png";
export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>👋 Hola, soy Elian Fares</p>
          <h1>Desarrollador Web</h1>
          <p>
            Me apasiona crear soluciones digitales que sean útiles, accesibles y
            diseñadas para mejorar la experiencia de las personas.
            <br /> Creo en el poder de la tecnología para conectar ideas,
            impulsar proyectos y transformar la forma en que vivimos y
            aprendemos.
          </p>
          <Link to="projects" smooth={true} duration={500}>
            <button>Ver mis proyectos</button>
          </Link>
          <a href="/Curriculum.pdf" download>
            <button>
              <FileDown
                className="down"
                size={18}
                style={{ transform: "translateY(3px)" }}
              />
              Descargar CV
            </button>
          </a>
        </div>

        <div className={styles.image}>
          <img src={img} alt="Elian Fares - Desarrollador Web" />
        </div>
      </div>
    </section>
  );
}
