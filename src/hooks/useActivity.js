import { useState } from "react";

// Recibe los datos de una actividad
const useActivity = (activityData) => {
  // Inicializa el estado
  const [state, setState] = useState({
    completed: false,
    selectedFigures: [],
    selectedPencil: null,
    paintedFigures: [],
  });

  const selectFigure = (figureId) => {
    setState((previousState) => {
      const figureAlreadySelected =
        previousState.selectedFigures.includes(figureId);

      if (figureAlreadySelected) {
        return previousState;
      }

      const updatedFigures = [...previousState.selectedFigures, figureId];
      const completed = updatedFigures.length === activityData.figures.length;

      return {
        ...previousState,
        selectedFigures: updatedFigures,
        completed,
      };
    });
  };
  const selectPencil = (pencilId) => {
    setState((previousState) => ({
      ...previousState,
      selectedPencil: pencilId,
    }));
  };

  const findFigure = (figureId) => {
    return activityData.figures.find((figure) => figure.id === figureId);
  };

  const findPencil = (pencilId) => {
    return activityData.pencils.find((pencil) => pencil.id === pencilId);
  };

  const isCorrectMatch = (pencil, figure) => {
    return pencil.color === figure.color;
  };

  const paintFigure = (figure) => {};

  const checkCompleted = () => {};

  const resetSelectedPencil = () => {};
  
  const dropPencilOnFigure = (pencilId, figureId) => {
    const pencil = findPencil(pencilId);

    const figure = findFigure(figureId);

    if (!pencil || !figure) {
      return;
    }

    const isCorrect = isCorrectMatch(pencil, figure);

    if (!isCorrect) {
      resetSelectedPencil();
      return;
    }

    paintFigure(figure);

    checkCompleted();

    resetSelectedPencil();
  };

  const reset = () => {};
  // Expone las acciones //
  const actions = {
    reset,
    selectFigure,
    selectPencil,
  };
  // Expone el estado, Expone los datos
  const session = {
    data: activityData,
    state,
    actions,
  };

  // Devuelve la sesión
  return session;
};
export default useActivity;
