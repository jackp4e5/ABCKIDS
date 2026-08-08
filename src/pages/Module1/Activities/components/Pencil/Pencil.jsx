import { useState } from "react";

const Pencil = ({ id, name, src }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("pencilId", id);

    setIsDragging(true);

    event.dataTransfer.setDragImage(
      event.currentTarget,
      50,
      25
    );
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <img
      src={src}
      alt={name}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        opacity: isDragging ? 0.1 : 1,
      }}
    />
  );
};

export default Pencil;