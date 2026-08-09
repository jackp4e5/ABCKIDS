import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../router/routes";
import styles from './Aside.module.css'
const activities = [
  {
    id: "activity01",
    title: "Actividad 1",
    route: ROUTES.MODULE1.ACTIVITY01,
  },
  {
    id: "activity02",
    title: "Actividad 2",
    route: ROUTES.MODULE1.ACTIVITY02,
  },
  {
    id: "activity03",
    title: "Actividad 3",
    route: ROUTES.MODULE1.ACTIVITY03,
  },
  {
    id: "activity04",
    title: "Actividad 4",
    route: ROUTES.MODULE1.ACTIVITY04,
  },
];
const Aside = () => {
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
