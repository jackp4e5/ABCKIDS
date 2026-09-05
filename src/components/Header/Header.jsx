import Button from "../Button/Button";
import styles from "./Header.module.css";
import logo from "../../../public/Logo2.png";
import { useEffect, useState } from "react";
const Header = ({ onToggle }) => {
  const handleOnclick = () => {
    console.log("toggle", aside.current.classList);

    aside.current.classList.toggle(`${styles.visible}`);
  };

  const [isFullscreen, setIsFullscreen] = useState(false);

  // Escuchar cambios en la pantalla completa (por si el usuario sale con la tecla ESC o F11)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        // Entrar en pantalla completa (aplica a toda la página)
        await document.documentElement.requestFullscreen();
      } else {
        // Salir de pantalla completa
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(
        "Error al intentar cambiar el modo de pantalla completa:",
        error,
      );
    }
  };

  return (
    <header className={styles.header}>
      <Button onClick={onToggle} variant="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-panel-left-close-icon lucide-panel-left-close"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="m16 15-3-3 3-3" />
        </svg>
      </Button>
      <a className={styles.logo}>
        <img className={styles.logo} src={logo} alt="imagen logo" />
      </a>

      <button
        onClick={toggleFullscreen}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {isFullscreen
          ? " Salir de Pantalla Completa"
          : "💻 Pantalla Completa"}
      </button>
    </header>
  );
};

export default Header;
