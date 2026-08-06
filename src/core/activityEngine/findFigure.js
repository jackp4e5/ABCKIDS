const findFigure = (figures, figureId) => {
  return figures.find((figure) => figure.id === figureId);
};

export default findFigure;
