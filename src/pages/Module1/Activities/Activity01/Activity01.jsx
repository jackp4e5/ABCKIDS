import { activity01 } from "../../../../data/Module1/activities/activity01";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import FigureSelector from "../components/FigureSelector/FigureSelector";
import hero from "../../../../../public/images/Activity01/hero.png";
import styles from "./Activity01.module.css";
import { useActivity01 } from "../../../../hooks/useActivity01";

const Activity01 = ({ onContinue }) => {
  const session = useActivity(activity01);
  const { actions, data, state } = session;

  const {
    selectFigure,
    checkActivity01,
    completed,
    stateActivity01,
    resetActivity01,
  } = useActivity01(activity01);

  const handleSubmit = () => {
    const correct = checkActivity01();

    actions.submit(correct);
  };

  const handleReset = () => {
    actions.reset();
    resetActivity01();
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
          <FigureSelector
            figures={data.figures}
            selectedFigures={stateActivity01.selectedFigures}
            selectFigure={selectFigure}
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

export default Activity01;
