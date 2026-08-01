import { useState } from "react";
import useActivity from "../../../../../hooks/useActivity";
import Figure from "../Figure/Figure";

const FigureSelector = ({ figures, selectedFigure, selectFigure }) => {
  // 1. Inicializa el estado como null (ningún objeto seleccionado)
  const [selected, setSelected] = useState(null);

  const handleOnclick = (id) => {
    console.log(selected);
    // 2. Usa .find() en lugar de .filter() para obtener el objeto directo, no un arreglo
    const imgSelected = figures.find((figure) => figure.id === id);

    setSelected(imgSelected);
  };

  return (
    <div>
      {figures.map((figure) => (
        <button onClick={() => handleOnclick(figure.id)} key={figure.id}>
          <Figure
            name={figure.name}
            // 3. Agrega el operador ?. para evitar errores si "selected" es null al inicio
            src={
              selected?.id === figure.id
                ? figure.srcImgActive
                : figure.srcImgGray
            }
          />
        </button>
      ))}
    </div>
  );
};

export default FigureSelector;
