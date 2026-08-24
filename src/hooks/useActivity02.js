import { useState } from "react";

import activityEngineDropPencilOnFigure from "../core/activityEngine/precesses/activityEngineDropPencilOnFigure";
import { checkActivity } from "../core/activityEngine";

const useActivity02 = (activityData) => {
  const [stateActivity02, setStateActivity02] = useState({
    selectedPencil: null,
    paintedFigures: [],
  });

  const selectPencil = (pencilId) => {
    setStateActivity02((previousState) => ({
      ...previousState,
      selectedPencil: pencilId,
    }));
  };

  const dropPencilOnFigure = (pencilId, figureId) => {
    setStateActivity02((previousState) => {
      return activityEngineDropPencilOnFigure(
        previousState,
        activityData.pencils,
        activityData.figures,
        pencilId,
        figureId,
      );
    });
  };

  const checkActivity02 = () => {
    return checkActivity({
      state: stateActivity02,
      data: activityData,
    });
  };

  const resetActivity02 = () => {
    setStateActivity02({
      selectedPencil: null,
      paintedFigures: [],
    });
  };

  const completed =
    stateActivity02.paintedFigures.length === activityData.figures.length;

  return {
    stateActivity02,
    selectPencil,
    dropPencilOnFigure,
    checkActivity02,
    resetActivity02,
    completed,
  };
};

export default useActivity02;
