const submit = "/ImagesBtns/btnSubmit.png";

import styles from "./ActivityControls.module.css"

const ActivityControls = ({ completed, actions }) => {
  const handleSubmit = () => {
    actions.submit();
  };
  return (
    <>
      {completed && (
        <a  href="#" className={styles.button} onClick={handleSubmit}>
          <img src={submit} alt="botton send" />
        </a>
      )}
    </>
  );
};

export default ActivityControls;
