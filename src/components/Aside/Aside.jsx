import { NavLink } from "react-router-dom";
import styles from "./Aside.module.css";
import activitiesNavigation from "../../pages/Module1/Activities/activitiesNavigation";

const Aside = ({ getActivityStatus }) => {
  return (
    <aside className={styles.aside}>
      {activitiesNavigation.map((activity) => {
        const status = getActivityStatus(activity.id);
        return (
          <NavLink
            key={activity.id}
            to={activity.route}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {status === "completed" && "✓ "}
            {status === "available" && "▶ "}
            {status === "locked" && "🔒 "}
            {activity.title}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Aside;
