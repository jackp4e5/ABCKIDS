import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Aside from "../../components/Aside/Aside";
import activitiesNavigation from "../../pages/Module1/Activities/activitiesNavigation";
import useModuleProgress from "../../hooks/useModuleProgress";

const MainLayout = () => {

  const { completeActivity, getActivityStatus } = useModuleProgress(activitiesNavigation);
  return (
    <div className={styles.layout}>
      <Header />

      <Aside getActivityStatus={getActivityStatus} />

      <main className={styles.main}>
        <Outlet context={{ completeActivity }} />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
