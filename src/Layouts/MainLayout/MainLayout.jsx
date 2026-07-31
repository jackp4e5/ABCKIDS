import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { screens } from "../../data/Module1/screens";
import { useParams } from "react-router-dom";

const MainLayout = () => {
  const { screenId } = useParams();

  const screen = screens[screenId];

  if (!screen) {
    return <NotFound />;
  }

  return (
    <div className={styles.layout}>
      <Header title={screen.title} />

      <main className={styles.main}>
        <Outlet context={{ screen }} />
      </main>

      <Footer
        previous={screen.previous}
        next={screen.next}
      />
    </div>
  );
};

export default MainLayout;
