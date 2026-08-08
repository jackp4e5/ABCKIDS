import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";
import feedBackModal from "../../../../../data/Module1/FeedbackModal/feedbackModal";
import imgRestart from "../../../../../../public/ImagesBtns/btnRestart.png";
import imgContinue from "../../../../../../public/ImagesBtns/btnContinue.png";
import styles from "./FeedbackModal.module.css";
const FeedbackModal = ({ correct, actions, onContinue}) => {
  const imgCorrect = feedBackModal.correct.images["correct"];
  const imgIncorrect = feedBackModal.inCorrect.images["inCorrect2"];

  const audioCorrect = feedBackModal.correct.audio["correct"];

  const audioIncorrect = feedBackModal.inCorrect.audio["inCorrect"];

  const audio = correct ? audioCorrect : audioIncorrect;

  return (
    <div className={styles.modal}>
      <div>
        <ImageBlock
          src={correct ? imgCorrect : imgIncorrect}
          name={"Imagen buen trabajo  "}
        />

        <audio src={audio} autoPlay />

        {correct && (
          <button onClick={onContinue} >
            <img src={imgContinue} alt="imagen Continue" />
          </button>
        )}
        <button onClick={actions.reset}>
          <img src={imgRestart} alt="imagen Restart" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
