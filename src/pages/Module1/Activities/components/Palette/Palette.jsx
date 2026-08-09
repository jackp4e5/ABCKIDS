import Figure from "../Figure/Figure";
import styles from "./Palette.module.css"
const Palette = ({ paletteFigures }) => {
  return (
    <aside className={styles.aside}>
      {paletteFigures.map((figure, index) => (
        <Figure
          key={figure.name + index}
          name={figure.name}
          src={figure.assets.active}
        />
      ))}
    </aside>
  );
};

export default Palette;
