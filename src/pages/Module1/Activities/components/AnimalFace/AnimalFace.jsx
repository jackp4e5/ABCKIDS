import { useState } from "react";

const AnimalFace = ({animal, id, src }) => {
  const [isDragging, setIsDragging] = useState(false);


  const handleDragStart = (e) => {
    e.dataTransfer.setData("pieceId", id);

   e.dataTransfer.effectAllowed = "move";

    setIsDragging(true);

    e.dataTransfer.setDragImage(e.currentTarget, 50, 25);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <img
      src={src}
      name="cara de animales"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        opacity: isDragging ? 0.1 : 1,
      }}
    />
  );
};

export default AnimalFace;
