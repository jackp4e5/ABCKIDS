import { useState } from "react";

const useActivity = (activityData) => {
  const [state, setState] = useState({
    submitted: false,
    completed: false,
    correct: false,
  });

  const completeActivity = (completed) => {
    setState((previousState) => ({
      ...previousState,
      completed,
    }));
  };

  const submit = (correct) => {
    setState((previousState) => ({
      ...previousState,
      submitted: true,
      correct,
    }));
  };

  const reset = () => {
    setState({
      submitted: false,
      completed: false,
      correct: false,
    });
  };

  const actions = {
    completeActivity,
    submit,
    reset,
  };

  return {
    data: activityData,
    state,
    actions,
  };
};

export default useActivity;
