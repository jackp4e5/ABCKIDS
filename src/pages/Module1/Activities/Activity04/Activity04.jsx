import useActivity from "../../../../hooks/useActivity";

import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";

import styles from "./Activity04.module.css";
import { activity04 } from "../../../../data/Module1/activities/activity04";
import useActivity04 from "../../../../hooks/useActivity04";
import ActivityDragAndDrop from "../components/ActivityDragAndDrop/ActivityDragAndDrop";
import ActivityDrag from "../components/ActivityDrag/ActivityDrag";

const hero = "/images/Activity04/hero.png";
const resetActivity = "/ImagesBtns/btnRestart.png";

const Activity04 = ({ onContinue }) => {
  const session = useActivity(activity04);

  const { actions, data, state } = session;

  const {
    stateActivity04,
    placedPieceIds,
    dropPieceOnAnimal,
    checkActivity04,
    resetActivity04,
    completed,
  } = useActivity04(activity04);

  const handleDropAnimalFace = (dropData) => {
    const { pieceId, animalId } = dropData;
    dropPieceOnAnimal(pieceId, animalId);
  };

  const handleSubmit = () => {
    const correct = checkActivity04();

    actions.submit(correct);
  };

  const handleReset = () => {
    actions.reset();
    resetActivity04();
  };

  const activityActions = {
    ...actions,
    submit: handleSubmit,
    reset: handleReset,
  };

  return (
    <div className={styles.container}>
      <img src={hero} className={styles.bgSlide} alt="image hero" />

      <div className={styles.activityWrapper}>
        <audio loop autoPlay src={data.audio} />

        <ActivityHeader header={data.header} instruction={data.instruction} />

        <ActivityDragAndDrop
          animals={data.animals}
          placements={stateActivity04.placements}
          handleDropAnimalFace={handleDropAnimalFace}
        />
        <ActivityDrag animals={data.animals} placedPieceIds={placedPieceIds} />

        <ActivityControls completed={completed} actions={activityActions} />

        {placedPieceIds.length > 0 && (
          <a className={styles.btnReset} href="#" onClick={handleReset}>
            <img src={resetActivity} alt="boton reset" />
          </a>
        )}
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

export default Activity04;
