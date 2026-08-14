import { useState } from "react";

const useModuleProgress = (activitiesNavigation) => {
  const [progress, setProgress] = useState({
    completedActivities: [],
  });

  const completeActivity = (activityId) => {
    setProgress((previous) => {
      if (previous.completedActivities.includes(activityId)) {
        return previous;
      }
      return {
        ...previous,
        completedActivities: [...previous.completedActivities, activityId],
      };
    });
  };

  const getActivityStatus = (activityId) => {
    const index = activitiesNavigation.findIndex(
      (activity) => activity.id === activityId,
    );

    if (index === -1) {
      return "unknown";
    }

    if (progress.completedActivities.includes(activityId)) {
      return "completed";
    }

    if (index === 0) {
      return "available";
    }

    const previousActivity = activitiesNavigation[index - 1];

    if (progress.completedActivities.includes(previousActivity.id)) {
      return "available";
    }

    return "locked";
  };

  return { progress, completeActivity, getActivityStatus };
};

export default useModuleProgress;
