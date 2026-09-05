import { activity03 } from "../../../../data/Module1/activities/activity03";

import useActivity from "../../../../hooks/useActivity";
import useActivity03 from "../../../../hooks/useActivity03";

import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import SolidPalette from "../components/SolidPalette";

const hero = "/images/Activity03/hero.png";

import styles from "./Activity03.module.css";

const Activity03 = ({ onContinue }) => {
  const session = useActivity(activity03);

  const { actions, data, state } = session;

  const {
    stateActivity03,
    completed,
    selectActivity03Figure,
    checkActivity03,
    resetActivity03,
  } = useActivity03(activity03);

  const handleSubmit = () => {
    const correct = checkActivity03();

    actions.submit(correct);
  };

  const handleReset = () => {
    actions.reset();
    resetActivity03();
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

        <SolidPalette
          solids={data.palette}
          selectedFaces={stateActivity03.selectedFaces}
          onSelectFigure={selectActivity03Figure}
        />

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

export default Activity03;
