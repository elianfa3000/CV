import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* === NAVBAR DESKTOP === */}
      <nav className={styles.navbar}>
        <div className={styles.linksDesktop}>
          <Link to="home" smooth={true} duration={500} className={styles.link}>
            Inicio
          </Link>
          <Link to="about" smooth={true} duration={500} className={styles.link}>
            Sobre mí
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Experiencia
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Proyectos
          </Link>
        </div>
      </nav>

      {/* === BOTÓN MÓVIL FLOTANTE === */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* === OVERLAY FULLSCREEN === */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={styles.overlayLink}
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={styles.overlayLink}
              onClick={closeMenu}
            >
              Sobre mí
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={styles.overlayLink}
              onClick={closeMenu}
            >
              Proyectos
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
