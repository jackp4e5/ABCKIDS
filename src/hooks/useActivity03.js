import { useState } from "react";

const useActivity03 = (activityData) => {
  const [selectedState, setSelectedState] = useState({
    selectedParent: null,
    selectedFigure: null,
    selectedFaces: [],
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

      return {
        ...previousState,
        selectedParent: parentId,
        selectedFigure: figureId,
        selectedFaces: updatedFaces,
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

  const reset = () => {
    setSelectedState({
      selectedParent: null,
      selectedFigure: null,
      selectedFaces: [],
    });
  };

  return {
    selectedState,
    actions: {
      selectActivity03Figure,
      checkActivity03,
      reset,
    },
  };
};

export default useActivity03;
