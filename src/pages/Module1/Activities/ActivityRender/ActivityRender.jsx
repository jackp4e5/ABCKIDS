import { useParams } from "react-router-dom";
import Activity01 from "../Activity01/Activity01";
import Activity02 from "../Activity02/Activity02";

const ActivityRender = () => {
  const { activityId } = useParams();

  const activities = {
    activity01: Activity01,
    activity02: Activity02,
  };

  const ActivityComponent = activities[activityId];

  if (!ActivityComponent) {
    return <div>Actividad no encontrada</div>;
  }

  return <ActivityComponent />;
};

export default ActivityRender;
