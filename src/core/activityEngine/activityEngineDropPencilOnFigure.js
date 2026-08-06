import {
  findFigure,
  findPencil,
  isCorrectMatch,
  paintFigure,
  resetSelectedPencil,
} from ".";

const activityEngineDropPencilOnFigure = (
  previousState,
  pencils,
  figures,
  pencilId,
  figureId,
) => {
  const pencil = findPencil(pencils, pencilId);

  const figure = findFigure(figures, figureId);

  if (!pencil || !figure) {
    return previousState;
  }

  const isCorrect = isCorrectMatch(pencil, figure);

  if (!isCorrect) {
    return resetSelectedPencil(newState);
  }
  let newState = previousState;

  newState = paintFigure(newState, figureId);
  newState = checkCompleted(newState, figures);
  newState = resetSelectedPencil(newState);

  return newState;
};

export default activityEngineDropPencilOnFigure;
