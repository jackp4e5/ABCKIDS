import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Aside from "../../components/Aside/Aside";
import activitiesNavigation from "../../pages/Module1/Activities/activitiesNavigation";
import useModuleProgress from "../../hooks/useModuleProgress";
import { useEffect, useRef, useState } from "react";

const MainLayout = () => {
  const { completeActivity, getActivityStatus } =
    useModuleProgress(activitiesNavigation); 

     const toggleAside = () => setIsOpen(!isOpen);

      const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 1000); 

  useEffect(() => {
    // Creamos el listener para el mismo breakpoint de tu CSS (< 1000px)
    const mediaQuery = window.matchMedia("(max-width: 999px)");

    const handleResize = (e) => {
      if (e.matches) {
        // Si la pantalla se achica a menos de 1000px, escondemos el aside
        setIsOpen(false);
      } else {
        // Opcional: Si vuelve a agrandarse, lo mostramos
        setIsOpen(true);
      }
    };

    // Escuchamos los cambios de tamaño de pantalla
    mediaQuery.addEventListener("change", handleResize);
    
    // Limpieza del evento cuando el componente se desmonte
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);


  return (
    <div>
      <Header onToggle={toggleAside} />
      <Aside isOpen={isOpen} getActivityStatus={getActivityStatus} />

      <main className={styles.main}>
        <Outlet context={{ completeActivity }} />
      </main>

      <Footer/>
    </div>
  );
};

export default MainLayout;
