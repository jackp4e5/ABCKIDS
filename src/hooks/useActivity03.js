import { useState } from "react";

const useActivity03 = (activityData) => {
  const [stateActivity03, setStateActivity03] = useState({
    selectedParent: null,
    selectedFigure: null,
    selectedFaces: [],
  });

  const selectActivity03Figure = (parentId, figureId) => {
    setStateActivity03((previousState) => {
      const updatedFaces = previousState.selectedFaces.filter(
        (face) => face.parentId !== parentId
      );

      updatedFaces.push({
        parentId,
        figureId,
      });

      return {
        ...previousState,
        selectedParent: parentId,
        selectedFigure: figureId,
        selectedFaces: updatedFaces,
      };
    });
  };

  const checkActivity03 = () => {
    if (stateActivity03.selectedFaces.length === 0) {
      return false;
    }

    return stateActivity03.selectedFaces.every((selection) => {
      const parent = activityData.palette.find(
        (item) => item.id === selection.parentId
      );

      const figure = parent.figures.find(
        (item) => item.id === selection.figureId
      );

      return figure.isCorrect;
    });
  };

  const resetActivity03 = () => {
    setStateActivity03({
      selectedParent: null,
      selectedFigure: null,
      selectedFaces: [],
    });
  };

  const completed =
    stateActivity03.selectedFaces.length ===
    activityData.palette.length;

  return {
    stateActivity03,
    completed,
    selectActivity03Figure,
    checkActivity03,
    resetActivity03,
  };
};

export default useActivity03;