import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import Activity01 from "../Activity01/Activity01";
import Activity02 from "../Activity02/Activity02";
import activitiesNavigation from "../activitiesNavigation";

const ActivityRender = () => {
  const navigate = useNavigate();
  const { activityId } = useParams();

  const { completeActivity } = useOutletContext();

  const currentActivity = activitiesNavigation.find(
    (activity) => activity.id === activityId,
  );

  const activities = {
    activity01: Activity01,
    activity02: Activity02,
  };

  const handleContinue = () => {
    if (!currentActivity?.next) {
      return;
    }

    navigate(currentActivity.next);
  };

   const handleActivityComplete = () => {
    completeActivity(activityId);
  };

  const ActivityComponent = activities[activityId];

  if (!ActivityComponent) {
    return <div>Actividad no encontrada</div>;
  }

  return <ActivityComponent onComplete={handleActivityComplete} onContinue={handleContinue}/>;
};

export default ActivityRender;
