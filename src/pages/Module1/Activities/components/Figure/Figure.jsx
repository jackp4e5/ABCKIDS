import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";

const Figure = ({ id, name, src, getIdFigure }) => {
  return <ImageBlock src={src} alt={`Imagen de ${name}`} />;
};

export default Figure;
