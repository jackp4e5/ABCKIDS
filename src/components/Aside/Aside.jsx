import { NavLink } from "react-router-dom";
import styles from "./Aside.module.css";
import activitiesNavigation from "./activitiesNavigation";
const Aside = () => {
  const activities = activitiesNavigation;
  return (
    <aside className={styles.aside}>
      {activities.map((activity) => (
        <NavLink
          key={activity.id}
          to={activity.route}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          {activity.title}
        </NavLink>
      ))}
    </aside>
  );
};

export default Aside;
