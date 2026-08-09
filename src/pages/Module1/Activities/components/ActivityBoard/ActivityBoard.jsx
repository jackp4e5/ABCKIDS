import FigureSelector from "../../components/FigureSelector/FigureSelector";
import styles from "./ActivityBoard.module.css";
const ActivityBoard = ({ children }) => {
  return <div className={styles.wrapparer}>{children}</div>;
};

export default ActivityBoard;
