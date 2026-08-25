import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import Activity01 from "../Activity01/Activity01";
import Activity02 from "../Activity02/Activity02";
import activitiesNavigation from "../activitiesNavigation";
import Activity03 from "../Activity03/Activity03";
import { NotFound } from "../../../../components/404/NotFound";
import Activity04 from "../Activity04/Activity04";

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
    activity03: Activity03,
    activity04: Activity04,
  };

  const handleContinue = () => {
    console.log(2);
    
    completeActivity(activityId);
    if (!currentActivity?.next) {
      return;
    }
    navigate(currentActivity.next);
  };
  const ActivityComponent = activities[activityId];

  if (!ActivityComponent) {
    return <NotFound/>;
  }

  return <ActivityComponent onContinue={handleContinue} />;
};

export default ActivityRender;
