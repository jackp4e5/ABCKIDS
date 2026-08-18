import { Link } from "react-router-dom";
import Pencil from "../Pencil/Pencil";
import styles from "./PencilSelector.module.css"
const PencilSelector = ({ pencils }) => {
 
  return (
    <div className={styles.wrapper}>
      {pencils.map((pencil, index) => (
        <Link key={pencil.id + index}>
          <Pencil
            pencil={pencil}
            id={pencil.id}
            name={pencil.name}
            src={pencil.assets.src}
          />
        </Link>
      ))}
    </div>
  );
};

export default PencilSelector;
