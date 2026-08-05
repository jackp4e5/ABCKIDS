import Pencil from "../Pencil/Pencil";

const PencilSelector = ({ pencils, selectPencil, selectedPencil }) => {
  return (
    <div>
      {pencils.map((pencil, index) => (
        <button onClick={() => selectPencil(pencil.id)} key={pencil.id + index}>
          <Pencil name={pencil.name} src={pencil.assets.src} />
        </button>
      ))}
    </div>
  );
};

export default PencilSelector;
