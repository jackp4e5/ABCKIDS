import { ROUTES } from "../../../router/routes";


const activitiesNavigation = [
  {
    id: "activity01",
    title: "Actividad 1",
    route: ROUTES.MODULE1.ACTIVITY01,
    next:ROUTES.MODULE1.ACTIVITY02
  },
  {
    id: "activity02",
    title: "Actividad 2",
    route: ROUTES.MODULE1.ACTIVITY02,
    next: ROUTES.MODULE1.ACTIVITY03,
  },
  {
    id: "activity03",
    title: "Actividad 3",
    route: ROUTES.MODULE1.ACTIVITY03,
    next: ROUTES.MODULE1.ACTIVITY04,
  },
  {
    id: "activity04",
    title: "Actividad 4",
    route: ROUTES.MODULE1.ACTIVITY04,
  },
];

export default activitiesNavigation;
