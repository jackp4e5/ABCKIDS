import { useRef } from "react";
import Figure from "../Figure/Figure";
import styles from "./FigureSelector.module.css";
import { Link } from "react-router-dom";

const FigureSelector = ({
  figures,
  selectedFigures,
  selectFigure,
  selectedPencil,
}) => {
  const handleOnClick = (figure) => {
    selectFigure(figure.id);

    if (figure.audio) {
      const audio = new Audio(figure.audio);
      audio
        .play()
        .catch((error) => console.error("Error al reproducir audio:", error));
    }
  };

  return (
    <div className={styles.wrapperContent}>
      {figures.map((figure, index) => (
        <Link
          className={styles.item}
          onClick={() => handleOnClick(figure)}
          key={figure.id + index}
        >
          <Figure
            name={figure.name}
            
            src={
              selectedFigures.includes(figure.id)
                ? figure.assets.active
                : figure.assets.gray
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default FigureSelector;
