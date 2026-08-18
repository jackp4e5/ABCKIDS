import { useState } from "react";
import activityEngineDropPencilOnFigure from "../core/activityEngine/precesses/activityEngineDropPencilOnFigure";
import { checkActivity } from "../core/activityEngine";
import useActivity03 from "./useActivity03";

// Recibe los datos de una actividad
const useActivity = (activityData) => {
  // Inicializa el estado
  const [state, setState] = useState({
    submitted: false,
    completed: false,
    correct: false,

    selectedFigures: [],
    selectedPencil: null,
    paintedFigures: [],
  });

  const {
    selectedState,
    actions: {
      selectActivity03Figure,
      checkActivity03,
      resetActivity03,
    },
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
    /*   const newState = checkActivity({
        state: previousState,
        data: activityData,
      }); */
      
      
      const correct = checkActivity03();      
      
      return {
        ...previousState,
        submitted: true,
        correct
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
    resetActivity03();
  };
  // Expone las acciones //
  const actions = {
    reset,
    selectFigure,
    selectActivity03Figure,
    selectPencil,
    dropPencilOnFigure,
    submit,
  };
  // Expone el estado, Expone los datos
  const session = {
    data: activityData,
    state,
     selectedState,
    actions,
  };

  // Devuelve la sesión
  return session;
};
export default useActivity;
