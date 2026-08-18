import { useState } from "react";

const useActivity03 = (activityData) => {
  const [selectedState, setSelectedState] = useState({
    selectedParent: null,
    selectedFigure: null,
    selectedFaces: [],
    completed: false,
  });

  const selectActivity03Figure = (parentId, figureId) => {
    setSelectedState((previousState) => {
      const updatedFaces = previousState.selectedFaces.filter(
        (face) => face.parentId !== parentId,
      );

      updatedFaces.push({
        parentId,
        figureId,
      });

      const completed = updatedFaces.length === activityData.palette.length;

      return {
        ...previousState,
        selectedParent: parentId,
        selectedFigure: figureId,
        selectedFaces: updatedFaces,
        completed,
      };
    });
  };

  const checkActivity03 = () => {
    if (selectedState.selectedFaces.length === 0) {
      return false;
    }
    return selectedState.selectedFaces.every((selection) => {
      const parent = activityData.palette.find(
        (item) => item.id === selection.parentId,
      );

      const figure = parent.figures.find(
        (item) => item.id === selection.figureId,
      );

      return figure.isCorrect;
    });
  };

  const resetActivity03 = () => {
    setSelectedState({
      selectedParent: null,
      selectedFigure: null,
      selectedFaces: [],
      completed: false,
    });
  };

  return {
    selectedState,
    actions: {
      selectActivity03Figure,
      checkActivity03,
      resetActivity03,
    },
  };
};

export default useActivity03;
