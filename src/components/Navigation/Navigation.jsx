import { Link } from "react-router-dom";

const Navigation = ({
  previous,
  next,
}) => {
  return (
    <>
      {next !== null && <Link>Siguiente</Link>}
      {previous !== null && <Link>Anterior</Link>}
    </>
  );
};

export default Navigation;
