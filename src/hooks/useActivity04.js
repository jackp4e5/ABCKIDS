import { useState } from "react";

const useActivity04 = (activityData) => {
  const [stateActivity04, setStateActivity04] = useState({
    placements: {},
    completed: false,
  });

  const dropPieceOnAnimal = (pieceId, animalId) => {
    setStateActivity04((previousState) => ({
      ...previousState,

      placements: {
        ...previousState.placements,
        [animalId]: pieceId,
      },
    }));
  };

  const checkActivity04 = () => {
    return activityData.animals.every((animal) => {
      const placedPiece =
        stateActivity04.placements[animal.id];

      return placedPiece === animal.piece.id;
    });
  };

  return {
    stateActivity04,
    dropPieceOnAnimal,
    checkActivity04,
  };
};

export default useActivity04;