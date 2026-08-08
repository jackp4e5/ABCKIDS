const DroppableFigure = ({ children, id, onFigureDrop }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const pencilId = event.dataTransfer.getData("pencilId");
   
    const dropData  = {
        pencilId,
        figureId:id
    }
    onFigureDrop(dropData );
  };
  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
};

export default DroppableFigure;
