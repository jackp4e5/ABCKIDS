import Figure from "../Figure/Figure";

const FigureSelector = ({ figures, selectedFigures, selectFigure }) => {
  return (
    <div>
      {figures.map((figure) => (
        <button onClick={() => selectFigure(figure.id)} key={figure.id}>
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
