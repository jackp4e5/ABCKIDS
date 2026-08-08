const checkActivity = ({ state, data }) => {
  const correct = data.figures.every(
    (figure) => state.paintedFigures.includes(figure.id)
  );

  return {
    ...state,
    correct,
  };
};

export default checkActivity;