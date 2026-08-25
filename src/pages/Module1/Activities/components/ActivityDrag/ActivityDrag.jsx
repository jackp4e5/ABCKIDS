import styles from "./ActivityDrag.module.css";
const ActivityDrag = ({ animals }) => {
  return (
    <div className={styles.pieceWrapper}>
      {animals.map((animal) => (
        <div key={animal.piece.id}>
          <img src={animal.piece.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ActivityDrag;
