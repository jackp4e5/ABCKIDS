const findPencil = (pencils, pencilId) => {
  return pencils.find((pencil) => pencil.id === pencilId);
};

export default findPencil;
