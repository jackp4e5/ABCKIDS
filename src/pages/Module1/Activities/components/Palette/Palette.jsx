import Figure from "../Figure/Figure";

const Palette = ({ paletteFigures }) => {
  return (
    <div>
      {paletteFigures.map((figure, index) => (
        <Figure
          key={figure.name + index}
          name={figure.name}
          src={figure.assets.active}
        />
      ))}
    </div>
  );
};

export default Palette;
