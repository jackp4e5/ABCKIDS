import styles from "./DroppableFigure.module.css";

const DroppableFigure = ({ children, id, onFigureDrop }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const pencilId = event.dataTransfer.getData("pencilId");

    const dropData = {
      pencilId,
      figureId: id,
    };
    onFigureDrop(dropData);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className={styles.wrapper}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default DroppableFigure;
