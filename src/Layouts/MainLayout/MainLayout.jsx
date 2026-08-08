import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header title={screen.title} />

      <main className={styles.main}>
        <Outlet context={{ screen }} />
      </main>

      <Footer  />
    </div>
  );
};

export default MainLayout;
