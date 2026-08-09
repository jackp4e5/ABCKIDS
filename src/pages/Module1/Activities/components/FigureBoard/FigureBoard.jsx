import DroppableFigure from "../DroppableFigure/DroppableFigure";
import Figure from "../Figure/Figure";
import styles from "./FigureBoard.module.css"

const FigureBoard = ({ paintedFigures, figures, onFigureDrop }) => {
  return (
    <div className={styles.wrapper}>
      {figures.map((figure) => (
        <DroppableFigure
          key={figure.id}
          id={figure.id}
          onFigureDrop={onFigureDrop}
        >
          <Figure
            id={figure.id}
            name={figure.name}
            src={
              paintedFigures.includes(figure.id)
                ? figure.assets.active
                : figure.assets.gray
            }
          />
        </DroppableFigure>
      ))}
    </div>
  );
};

export default FigureBoard;
