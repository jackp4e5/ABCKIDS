import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";
import feedBackModal from "../../../../../data/Module1/FeedbackModal/feedbackModal";
import imgRestart from "../../../../../../public/ImagesBtns/btnRestart.png";
import imgContinue from "../../../../../../public/ImagesBtns/btnContinue.png";
import styles from "./FeedbackModal.module.css";
import { Link } from "react-router-dom";
const FeedbackModal = ({ correct, actions, onContinue }) => {
  const randomItem = Math.floor(
    Math.random() * Object.keys(feedBackModal.correct.images).length,
  );
  const randomItemIncorrect = Math.floor(
    Math.random() * Object.keys(feedBackModal.inCorrect.images).length,
  );

  const correctItem =
    randomItem === 0 ? "correct" : randomItem === 1 ? "correct02" : "correct03";

  const IncorrectItem = randomItemIncorrect === 0 ? "inCorrect" : "inCorrect02";

  const imgCorrect = feedBackModal.correct.images[correctItem];

  const imgIncorrect = feedBackModal.inCorrect.images[IncorrectItem];

  const audioCorrect = feedBackModal.correct.audio[correctItem];

  const audioIncorrect = feedBackModal.inCorrect.audio[IncorrectItem];

  const audio = correct ? audioCorrect : audioIncorrect;

  return (
    <div className={styles.modal}>
      <div className={styles.bgSlide}>
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
          <Link className={styles.reset} onClick={actions.reset}>
            <img src={imgRestart} alt="imagen Restart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
