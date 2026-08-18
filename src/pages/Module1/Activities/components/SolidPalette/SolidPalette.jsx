import { Link } from "react-router-dom";
import styles from "./SolidPalette.module.css";
const SolidPalette = ({ solids, selectedFaces, onSelectFigure }) => {
  const isFigureSelected = (parentId, figureId) => {
    return selectedFaces.some(
      (selection) =>
        selection.parentId === parentId && selection.figureId === figureId,
    );
  };

  return (
    <div className={styles.palette}>
      {solids.map((solid) => (
        <div className={styles.wrapper} key={solid.id}>
          <img className={styles.solids} src={solid.assets.active} alt={solid.name} />

          <div className={styles.wrapperFigures}>
            {solid.figures.map((figure) => (
              <Link
                key={figure.id}
                onClick={() => onSelectFigure(solid.id, figure.id)}
              >
                <img
                className={styles.figures}
                  src={
                    isFigureSelected(solid.id, figure.id)
                      ? figure.assets.active
                      : figure.assets.default
                  }
                  alt={figure.name}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolidPalette;
