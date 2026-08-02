import FigureSelector from "../FigureSelector/FigureSelector";

const ActivityBoard = ({ session }) => {
  const { data, state, actions } = session;
  return (
    <FigureSelector
      figures={data.figures}
      selectedFigures={state.selectedFigures}
      selectFigure={actions.selectFigure}
    />
  );
};

export default ActivityBoard;
