import { useState } from "react";
<<<<<<< HEAD
import activityEngineDropPencilOnFigure from "../core/activityEngine/precesses/activityEngineDropPencilOnFigure";
import { checkActivity } from "../core/activityEngine";
import useActivity03 from "./useActivity03";
import isCompleted from "../core/activityEngine/utils/isCompleted";
=======
>>>>>>> 73edd8c (se hizo la refactorizacion de las tres actividades, para que la logica estubiera fuera de useactivity)

const useActivity = (activityData) => {
  const [state, setState] = useState({
    submitted: false,
    completed: false,
    correct: false,
  });

<<<<<<< HEAD
  const {
    selectedState,
    actions: { selectActivity03Figure, checkActivity03, resetActivity03 },
  } = useActivity03(activityData);

  const { selectedFaces } = selectedState;

  const selectFigure = (figureId) => {
    setState((previousState) => {
      const figureAlreadySelected =
        previousState.selectedFigures.includes(figureId);

      if (figureAlreadySelected) {
        return previousState;
      }

      const updatedFigures = [...previousState.selectedFigures, figureId];
      const completed = isCompleted(
        updatedFigures.length,
        activityData.figures.length,
      );

      return {
        ...previousState,
        selectedFigures: updatedFigures,
        paintedFigures: updatedFigures,
        completed,
      };
    });
  };

  const selectPencil = (pencilId) => {
=======
  const completeActivity = (completed) => {
>>>>>>> 73edd8c (se hizo la refactorizacion de las tres actividades, para que la logica estubiera fuera de useactivity)
    setState((previousState) => ({
      ...previousState,
      completed,
    }));
  };

<<<<<<< HEAD
  const dropPencilOnFigure = (pencilId, figureId) => {
    setState((previousState) => {
      return activityEngineDropPencilOnFigure(
        previousState,
        activityData.pencils,
        activityData.figures,
        pencilId,
        figureId,
      );
    });
  };

  const submit = () => {
    setState((previousState) => {
      /*   const newState = checkActivity({
        state: previousState,
        data: activityData,
      }); */

      const correct = checkActivity03();

      return {
        ...previousState,
        submitted: true,
        correct,
      };
    });
=======
  const submit = (correct) => {
    setState((previousState) => ({
      ...previousState,
      submitted: true,
      correct,
    }));
>>>>>>> 73edd8c (se hizo la refactorizacion de las tres actividades, para que la logica estubiera fuera de useactivity)
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
<<<<<<< HEAD
    selectedState,
=======
>>>>>>> 73edd8c (se hizo la refactorizacion de las tres actividades, para que la logica estubiera fuera de useactivity)
    actions,
  };
};

export default useActivity;
