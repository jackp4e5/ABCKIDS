import { useState } from "react";
import { useNavigate } from "react-router-dom";
import activityEngineDropPencilOnFigure from "../core/activityEngine/precesses/activityEngineDropPencilOnFigure";
import { checkActivity } from "../core/activityEngine";

// Recibe los datos de una actividad
const useActivity = (activityData) => {
  // Inicializa el estado
  const [state, setState] = useState({
    submitted: false,
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
        paintedFigures: updatedFigures,
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
      const newState = checkActivity({
        state: previousState,
        data: activityData,
      });

      return {
        ...newState,
        submitted: true,
      };
    });
  };

  const reset = () => {
    setState({
      submitted: false,
      completed: false,
      correct: false,
      selectedFigures: [],
      selectedPencil: null,
      paintedFigures: [],
    });
  };
  // Expone las acciones //
  const actions = {
    reset,
    selectFigure,
    selectPencil,
    dropPencilOnFigure,
    submit,
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
