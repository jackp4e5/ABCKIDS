import styles from "./ActivityDragAndDrop.module.css";

const ActivityDragAndDrop = ({
  animals,
  placements,
  handleDropAnimalFace,
}) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, animalId) => {
    const pieceId = event.dataTransfer.getData("pieceId");

    const dropData = {
      pieceId,
      animalId,
    };

    handleDropAnimalFace(dropData);
  };

  return (
    <div className={styles.wrappContent}>
      {animals.map((animal) => {
        const pieceId = placements?.[animal.id];

        const pieceAnimal = animals.find(
          (item) => item.piece.id === pieceId
        );

        return (
          <div
            key={animal.id}
            className={styles.dropZone}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, animal.id)}
          >
            <img
              className={styles.dropZoneImage}
              src={animal.dropZone.image}
              alt={animal.id}
            />

            {pieceAnimal && (
              <img
                className={styles.animalFace}
                src={pieceAnimal.piece.image}
                alt={pieceAnimal.piece.id}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActivityDragAndDrop;