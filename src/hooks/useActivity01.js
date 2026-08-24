import { useState } from "react";

import { checkActivity } from "../core/activityEngine";

export const useActivity01 = (activityData) => {
  const [stateActivity01, setStateActivity01] = useState({
    selectedFigures: [],
    paintedFigures: [],
  });

  const selectFigure = (figureId) => {
    setStateActivity01((previousState) => {
      const figureAlreadySelected =
        previousState.selectedFigures.includes(figureId);

      if (figureAlreadySelected) {
        return previousState;
      }

      const updatedFigures = [
        ...previousState.selectedFigures,
        figureId,
      ];

      return {
        ...previousState,
        selectedFigures: updatedFigures,
        paintedFigures: updatedFigures,
      };
    });
  };

  const checkActivity01 = () => {
    return checkActivity({
      state: stateActivity01,
      data: activityData,
    });
  };

  const resetActivity01 = () => {
  setStateActivity01({
    selectedFigures: [],
    paintedFigures: [],
  });
};

  const completed =
  stateActivity01.selectedFigures.length ===
  activityData.figures.length;

  return {
    selectFigure,
    checkActivity01,
    completed,
    stateActivity01,
    resetActivity01
  };
};