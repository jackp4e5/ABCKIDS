const checkCompleted = (state, figures) => {
  const completed = state.paintedFigures.length === figures.length;

  return {
    ...state,
    completed,
  };
};

export default checkCompleted;
