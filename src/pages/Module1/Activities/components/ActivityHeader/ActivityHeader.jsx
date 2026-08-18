import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";
import styles from "./ActivityHeader.module.css";
const ActivityHeader = ({ header, instruction }) => {
  const handleOnClick = () => {
    if (instruction.audio) {
      const audio = new Audio(instruction.audio);

      audio
        .play()
        .catch((error) => console.error("Error al reproducir audio:", error));
    }
  };

  const { assets } = header;
  const {
    message,
    assets: { iconAudio },
  } = instruction;
  return (
    <header className={styles.header}>
      {/*  <ImageBlock src={assets.badge} alt={`Badge Nociones Espaciales`}/> */}

      <div className={styles.wrapperContent}>
        <h3>{header.title}</h3>

        <div className={styles.wrapperImg}>
          <a href="#" onClick={() => handleOnClick()}>
            <ImageBlock src={iconAudio} alt={"icon Audio"} />
            <audio autoPlay src={instruction.audio} />
          </a>
          <p>{message}</p>
        </div>
      </div>
    </header>
  );
};

export default ActivityHeader;
