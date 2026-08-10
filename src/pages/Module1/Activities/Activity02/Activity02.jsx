import { activity02 } from "../../../../data/Module1/activities/activity02";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import FigureBoard from "../components/FigureBoard/FigureBoard";
import FigureSelector from "../components/FigureSelector/FigureSelector";
import Palette from "../components/Palette/Palette";
import PencilSelector from "../components/PencilSelector/PencilSelector";
import { useNavigate } from "react-router-dom";
import styles from "./Activity02.module.css";

const Activity02 = ({onContinue }) => {
  const session = useActivity(activity02);

  const { actions, data, state } = session;

  const onFigureDrop = (data) => {
    actions.dropPencilOnFigure(data.pencilId, data.figureId);
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className={styles.container}>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard>
        <Palette paletteFigures={data.paletteFigures} />
        <PencilSelector
          pencils={data.pencils}
          selectPencil={session.actions.selectPencil}
          selectedPencil={state.selectedPencil}
        />

        <FigureBoard
          paintedFigures={state.paintedFigures}
          figures={data.figures}
          onFigureDrop={onFigureDrop}
        />
      </ActivityBoard>

      <ActivityControls completed={state.completed} actions={actions} />

      {state.submitted && (
        <FeedbackModal
          correct={state.correct}
          actions={actions}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default Activity02;
