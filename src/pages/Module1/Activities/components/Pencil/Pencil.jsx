import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";

const Pencil = ({ name, src }) => {
  return <ImageBlock src={src} alt={name} />;
};

export default Pencil;
