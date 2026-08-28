import { useState } from "react";

const useActivity04 = (activityData) => {
  const [stateActivity04, setStateActivity04] = useState({
    placements: {},
    completed: false,
    correct: false,
  });

  const placedPieceIds = Object.values(stateActivity04.placements);

  const dropPieceOnAnimal = (pieceId, animalId) => {
    setStateActivity04((previousState) => {
      const updatedPlacements = {
        ...previousState.placements,
        [animalId]: pieceId,
      };

      const completed =
        Object.keys(updatedPlacements).length === activityData.animals.length;

      return {
        ...previousState,
        placements: updatedPlacements,
        completed,
      };
    });
  };

  const checkActivity04 = () => {
    return activityData.animals.every((animal) => {
      const placedPiece = stateActivity04.placements[animal.id];

      return placedPiece === animal.piece.id;
    });
  };

  const resetActivity04 = () => {
    setStateActivity04({
      placements: {},
      completed: false,
      correct: false,
    });
  };

  return {
    stateActivity04,
    dropPieceOnAnimal,
    checkActivity04,
    resetActivity04,
    placedPieceIds,
    completed: stateActivity04.completed,
  };
};

export default useActivity04;
