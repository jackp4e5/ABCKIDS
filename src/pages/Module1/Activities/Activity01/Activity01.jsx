import { activity01 } from "../../../../data/Module1/activities/activity01";
import useActivity from "../../../../hooks/useActivity";
import FigureSelector from "./FigureSelector/FigureSelector";

const Activity01 = () => {
  const session = useActivity(activity01);

  return (
    <FigureSelector
      figures={session.data.figures}
      selectedFigure={session.state.selectedFigure}
      selectFigure={session.actions.selectFigure}
    />
  );
};

export default Activity01;
