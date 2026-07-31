import Button from "../Button/Button";

const Navigation = ({
  previous,
  next,
}) => {
  return (
    <>
      {next !== null && <Button>Siguiente</Button>}
      {previous !== null && <Button>Anterior</Button>}
    </>
  );
};

export default Navigation;
