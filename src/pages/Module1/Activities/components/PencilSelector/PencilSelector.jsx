import Pencil from "../Pencil/Pencil";

const PencilSelector = ({ pencils }) => {
 
  return (
    <div>
      {pencils.map((pencil, index) => (
        <button key={pencil.id + index}>
          <Pencil
            pencil={pencil}
            id={pencil.id}
            name={pencil.name}
            src={pencil.assets.src}
          />
        </button>
      ))}
    </div>
  );
};

export default PencilSelector;
