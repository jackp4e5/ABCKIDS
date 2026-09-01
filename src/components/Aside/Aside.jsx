import { NavLink } from "react-router-dom";
import styles from "./Aside.module.css";
import activitiesNavigation from "../../pages/Module1/Activities/activitiesNavigation";

const Aside = ({ getActivityStatus, isOpen }) => {
  const asideClass = isOpen ? `${styles.aside} ${styles.active}` : styles.aside;
  return (
    <aside className={asideClass}>
      {activitiesNavigation.map((activity) => {
        const status = getActivityStatus(activity.id);
        return (
          <NavLink
            key={activity.id}
            to={activity.route}
            className={({ isActive }) => (isActive ? styles.focus : `${styles.link}`)}
          >
            {status === "completed" && "✓ "}
            {status === "available" && "▶ "}
            {status === "locked" && ""}
            {activity.title}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Aside;
