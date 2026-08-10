import { Outlet } from "react-router-dom";
import styles from "./ActivityLayout.module.css";

const ActivityLayout = () => {
  return (
    <>
      <section className={styles.section}>
        <Outlet />
      </section>
    </>
  );
};

export default ActivityLayout;
