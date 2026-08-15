
import styles from "./SolidPalette.module.css"
const SolidPalette = ({ solids, selectedFigure, onSelectFigure }) => {
  return (
    <div>
      {solids.map((solid) => (
        <div className={styles.wrapper} key={solid.id}>

          <img
            src={solid.assets.active}
            alt={solid.name}
          />

          <div>
            {solid.figures.map((figure) => (
              <button
                key={figure.id}
                onClick={() =>
                  onSelectFigure(solid.id, figure.id)
                }
              >
                <img
                  src={
                    selectedFigure === figure.id
                      ? figure.assets.active
                      : figure.assets.default
                  }
                  alt={figure.name}
                />
              </button>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};

export default SolidPalette;