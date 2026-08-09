import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import styles from "./ActivityLayout.module.css";

const ActivityLayout = () => {
  return (
    <>
      <Aside />

      <section className={styles.section}>
        <Outlet />
      </section>
    </>
  );
};

export default ActivityLayout;
