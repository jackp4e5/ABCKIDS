import { activity03 } from "../../../../data/Module1/activities/activity03";
import useActivity from "../../../../hooks/useActivity";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import SolidPalette from "../components/SolidPalette";

import styles from "./Activity03.module.css";

const Activity03 = ({ onContinue }) => {
  const session = useActivity(activity03);
 
  const { actions, data, state,selectedState } = session;
console.log(selectedState);

  return (
    <div className={styles.container}>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <SolidPalette
        solids={data.palette}
        selectedFaces={selectedState.selectedFaces}
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
