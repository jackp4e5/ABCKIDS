import { useEffect } from "react";
import { activity01 } from "../../../../data/Module1/activities/activity01";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import FigureSelector from "../components/FigureSelector/FigureSelector";
import styles from "./Activity01.module.css";
const Activity01 = ({onComplete}) => {
  const session = useActivity(activity01);

  const { actions, data, state } = session;

    useEffect(() => {
      if (state.submitted && state.correct) {
        onComplete();
      }
    }, [state.submitted, state.correct, onComplete]);

    const handleContinue = () => {
    onContinue();
  };

  return (
    <div className={styles.container}>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard>
        <FigureSelector
          figures={data.figures}
          selectedFigures={state.selectedFigures}
          selectFigure={actions.selectFigure}
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

export default Activity01;
