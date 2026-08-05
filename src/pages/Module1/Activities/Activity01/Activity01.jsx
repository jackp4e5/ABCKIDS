import { activity01 } from "../../../../data/Module1/activities/activity01";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FigureSelector from "../components/FigureSelector/FigureSelector";

const Activity01 = () => {
  const session = useActivity(activity01);

  const { actions, data, state } = session;

  return (
    <>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard>
        <FigureSelector
          figures={data.figures}
          selectedFigures={state.selectedFigures}
          selectFigure={actions.selectFigure}
        />
      </ActivityBoard>

      <ActivityControls actions={actions} />
    </>
  );
};

export default Activity01;
