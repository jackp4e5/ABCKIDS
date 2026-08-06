import { useState } from "react";
import activityEngineDropPencilOnFigure from "../core/activityEngine/activityEngineDropPencilOnFigure";

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


const dropPencilOnFigure  =(pencilId, figureId)=>{

  setState((previousState) => {
    return activityEngineDropPencilOnFigure (
      previousState,
      activityData.pencils,
      activityData.figures,
      pencilId,
      figureId,
    );
  });
}

  const reset = () => {};
  // Expone las acciones //
  const actions = {
    reset,
    selectFigure,
    selectPencil,
    dropPencilOnFigure
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
