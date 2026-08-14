import { activity03 } from "../../../../data/Module1/activities/activity03";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import FigureBoard from "../components/FigureBoard/FigureBoard";
import FigureSelector from "../components/FigureSelector/FigureSelector";
import Palette from "../components/Palette/Palette";
import PencilSelector from "../components/PencilSelector/PencilSelector";

import styles from "./Activity03.module.css";

const Activity03 = ({ onContinue }) => {
  const session = useActivity(activity03);

  const { actions, data, state } = session;

  const onFigureDrop = (data) => {
    actions.dropPencilOnFigure(data.pencilId, data.figureId);
  };

  return (
    <div className={styles.container}>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard>
        <Palette paletteFigures={data.paletteFigures} />
      

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
          onContinue={onContinue}
        />
      )}
    </div>
  );
};

export default Activity03;
