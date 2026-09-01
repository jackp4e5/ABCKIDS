import { activity02 } from "../../../../data/Module1/activities/activity02";

import useActivity from "../../../../hooks/useActivity";
import useActivity02 from "../../../../hooks/useActivity02";

import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import FigureBoard from "../components/FigureBoard/FigureBoard";
import Palette from "../components/Palette/Palette";
import PencilSelector from "../components/PencilSelector/PencilSelector";

import hero from "../../../../../public/images/Activity02/hero.png";

import styles from "./Activity02.module.css";

const Activity02 = ({ onContinue }) => {
  const session = useActivity(activity02);

  const { actions, data, state } = session;

  const {
    stateActivity02,
    selectPencil,
    dropPencilOnFigure,
    checkActivity02,
    resetActivity02,
    completed,
  } = useActivity02(activity02);

  const onFigureDrop = (data) => {
    dropPencilOnFigure(data.pencilId, data.figureId);
  };

  const handleSubmit = () => {
    const correct = checkActivity02();

    actions.submit(correct);
  };

  const handleReset = () => {
    actions.reset();
    resetActivity02();
  };

  const activityActions = {
    ...actions,
    submit: handleSubmit,
    reset: handleReset,
  };

  return (
    <div className="container">
      <img src={hero} className={styles.bgSlide} alt="image hero" />

      <div className={styles.activityWrapper}>
        <audio loop autoPlay src={data.audio} />

        <ActivityHeader header={data.header} instruction={data.instruction} />

        <ActivityBoard>
          <Palette paletteFigures={data.paletteFigures} />

          <PencilSelector
            pencils={data.pencils}
            selectPencil={selectPencil}
            selectedPencil={stateActivity02.selectedPencil}
          />

          <FigureBoard
            paintedFigures={stateActivity02.paintedFigures}
            figures={data.figures}
            onFigureDrop={onFigureDrop}
          />
        </ActivityBoard>

        <ActivityControls completed={completed} actions={activityActions} />
      </div>

      {state.submitted && (
        <FeedbackModal
          correct={state.correct}
          actions={activityActions}
          onContinue={onContinue}
        />
      )}
    </div>
  );
};

export default Activity02;
