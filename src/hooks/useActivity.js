import {  useState } from "react";

// Recibe los datos de una actividad
const useActivity = (activityData) => {
  // Inicializa el estado
  const [state, setState] = useState({
    completed: false,
    selectedFigures: [],
     selectedPencil: null,
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
  const  selectPencil = (pencil) => {
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
