import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Aside from "../../components/Aside/Aside";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />

   <Aside/>

      <main className={styles.main}>
        <Outlet context={{ screen }} />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
