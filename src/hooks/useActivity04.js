import { useState } from "react";

const useActivity04 = () => {
  const [stateActivity04, setStateActivity04] = useState({
    placements: {},
    completed: false,
  });

  const dropPieceOnAnimal=(pieceId, animalId)=>{

  }


  const checkActivity04 = () => {
  return activityData.animals.every((animal) => {
    const placedPiece = stateActivity04.placements[animal.id];

    return placedPiece === animal.piece.id;
  });
};



  return {
    stateActivity04,
    checkActivity04
  };
};

export default useActivity04;
