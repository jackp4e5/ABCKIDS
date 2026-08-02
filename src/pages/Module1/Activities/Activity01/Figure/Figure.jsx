import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";

const Figure = ({name,src}) => {
  return (
  <ImageBlock src={src} alt={`Imagen de ${name}`} />
)
};

export default Figure;
