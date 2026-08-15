import { activity03 } from "../../../../data/Module1/activities/activity03";
import useActivity from "../../../../hooks/useActivity";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import SolidPalette from "../components/SolidPalette";

import styles from "./Activity03.module.css";

const Activity03 = ({ onContinue }) => {
  const session = useActivity(activity03);

  const { actions, data, state } = session;

  return (
    <div className={styles.container}>
      {/* <img className={styles.relative} src={data.hero} alt="imagen hero" /> */}
      <h2>{data.header.title}</h2>

      <SolidPalette
        solids={data.palette}
        selectedFaces={state.selectedFaces}
        onSelectFigure={actions.selectActivity03Figure}
      />

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
