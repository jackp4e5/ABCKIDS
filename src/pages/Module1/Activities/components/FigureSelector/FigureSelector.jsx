import Figure from "../Figure/Figure";
import styles from "./FigureSelector.module.css";

const FigureSelector = ({
  figures,
  selectedFigures,
  selectFigure,
  selectedPencil,
}) => {
  return (
    <div className={styles.wrapperContent}>
      {figures.map((figure, index) => (
        <button onClick={() => selectFigure(figure.id)} key={figure.id + index}>
          <Figure
            name={figure.name}
            src={
              selectedFigures.includes(figure.id)
                ? figure.assets.active
                : figure.assets.gray
            }
          />
        </button>
      ))}
    </div>
  );
};

export default FigureSelector;
