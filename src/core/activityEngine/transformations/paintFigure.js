const paintFigure = (state, figureId) => {
  const figureAlreadyPainted  = state.paintedFigures.includes(figureId);

  if (figureAlreadyPainted ) {
    return state;
  }
  return { ...state, paintedFigures: [...state.paintedFigures, figureId] };
};

export default paintFigure;
