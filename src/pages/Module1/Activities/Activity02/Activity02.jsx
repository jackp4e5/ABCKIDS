import { activity02 } from "../../../../data/Module1/activities/activity02";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FigureSelector from "../components/FigureSelector/FigureSelector";
import PencilSelector from "../components/PencilSelector/PencilSelector";

const Activity02 = () => {
  const session = useActivity(activity02);

  const { actions, data, state } = session;

  return (
    <>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard>
        <PencilSelector
          pencils={data.pencils}
          selectPencil={session.actions.selectPencil}
          selectedPencil={state.selectedPencil}
        />

        <FigureSelector
          figures={data.figures}
          selectedFigures={state.selectedFigures}
          selectFigure={actions.selectFigure}
          selectedPencil={state.selectedPencil}
        />
      </ActivityBoard>

      <ActivityControls actions={actions} />
    </>
  );
};

export default Activity02;
