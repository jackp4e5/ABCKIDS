import { useState } from "react";
import activityEngineDropPencilOnFigure from "../core/activityEngine/precesses/activityEngineDropPencilOnFigure";
import { checkActivity } from "../core/activityEngine";

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

    selectedParent: null,
    selectedFigure: null,

    selectedFaces: [],
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

  const selectActivity03Figure = (parentId, figureId) => {
    setState((previousState) => {
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

    const correct = previousState.selectedFaces.every((selection) => {
      const parent = activityData.palette.find(
        (item) => item.id === selection.parentId,
      );

      const figure = parent.figures.find(
        (item) => item.id === selection.figureId,
      );

 

      return figure.isCorrect;
    });

    return {
      ...previousState,
      submitted: true,
      correct,
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

      selectedParent: null,
      selectedFigure: null,
      selectedFaces: [],
    });
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
    actions,
  };

  // Devuelve la sesión
  return session;
};
export default useActivity;
