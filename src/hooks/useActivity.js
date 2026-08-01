import { useState } from "react";

// Recibe los datos de una actividad
const useActivity = (activityData) => {
  // Inicializa el estado
  const [state, setState] = useState({
    completed: false,
    selectedFigure: null,
  });

  const selectFigure = (figureId) => {
    setState((previousState) => ({
      ...previousState,
      selectedFigure: figureId,
    }));
  };

  const data = activityData;
  const reset = () => {};
  // Expone las acciones //
  const actions = {
    reset,
    selectFigure,
  };
  // Expone el estado, Expone los datos
  const session = {
    data,
    state,
    actions,
  };

  // Devuelve la sesión
  return session;
};
export default useActivity;
