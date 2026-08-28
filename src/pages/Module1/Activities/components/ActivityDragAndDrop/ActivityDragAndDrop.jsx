import styles from "./ActivityDragAndDrop.module.css";

const ActivityDragAndDrop = ({ animals }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (e, id) => {
    const pieceId = e.dataTransfer.getData("pieceId");

    const dropData = {
      pieceId,
      animalId: id,
    };
    console.log("handleDrop", dropData);
  };

  return (
    <div className={styles.wrappContent}>
      {animals.map((animal) => (
        <div
          key={animal.id}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, animal.id)}
        >
          <img src={animal.dropZone.image} alt={animal.id} />
        </div>
      ))}
    </div>
  );
};

export default ActivityDragAndDrop;
