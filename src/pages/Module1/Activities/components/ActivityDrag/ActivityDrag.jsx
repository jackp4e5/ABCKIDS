import styles from "./ActivityDrag.module.css";
import AnimalFace from "../AnimalFace/AnimalFace";
const ActivityDrag = ({ animals, placedPieceIds }) => {
  const availableAnimals = animals.filter(
    (animal) => !placedPieceIds.includes(animal.piece.id),
  );
  return (
    <div className={styles.pieceWrapper}>
      {availableAnimals.map((animal) => (
        <div className={styles.imagesWrapper} key={animal.piece.id}>
          <AnimalFace
            animal={animal}
            id={animal.piece.id}
            src={animal.piece.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ActivityDrag;
