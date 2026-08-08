import DroppableFigure from "../DroppableFigure/DroppableFigure";
import Figure from "../Figure/Figure";

const FigureBoard = ({ paintedFigures, figures, onFigureDrop }) => {
  return (
    <>
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
    </>
  );
};

export default FigureBoard;
