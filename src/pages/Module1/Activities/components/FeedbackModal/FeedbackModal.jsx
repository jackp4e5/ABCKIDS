import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";
import feedBackModal from "../../../../../data/Module1/FeedbackModal/feedbackModal";
import imgRestart from "../../../../../../public/ImagesBtns/btnRestart.png";
import imgContinue from "../../../../../../public/ImagesBtns/btnContinue.png";
import styles from "./FeedbackModal.module.css";
const FeedbackModal = ({ correct, actions, onContinue }) => {
  const imgCorrect = feedBackModal.correct.images["correct"];
  const imgIncorrect = feedBackModal.inCorrect.images["inCorrect2"];

  const audioCorrect = feedBackModal.correct.audio["correct"];

  const audioIncorrect = feedBackModal.inCorrect.audio["inCorrect"];

  const audio = correct ? audioCorrect : audioIncorrect;

  return (
    <div className={styles.modal}>
      <ImageBlock
        src={correct ? imgCorrect : imgIncorrect}
        name={"Imagen buen trabajo  "}
      />

      <audio src={audio} autoPlay />

     <div className={styles.buttonsWrapper}> 
       {correct && (
        <a href="#" onClick={onContinue}>
          <img src={imgContinue} alt="imagen Continue" />
        </a>
      )}
      <a href="#" onClick={actions.reset}>
        <img src={imgRestart} alt="imagen Restart" />
      </a>
     </div>
    </div>
  );
};

export default FeedbackModal;
