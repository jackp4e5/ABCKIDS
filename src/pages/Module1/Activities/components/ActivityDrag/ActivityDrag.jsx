import styles from "./ActivityDrag.module.css";
import AnimalFace from "../AnimalFace/AnimalFace";
const ActivityDrag = ({ animals }) => {
  return (
    <div className={styles.pieceWrapper}>
      {animals.map((animal) => (
        <div key={animal.piece.id}>
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
