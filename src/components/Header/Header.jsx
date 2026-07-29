import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>

      <h1 className={styles.title}>{title}</h1>

      <Button variant="primary" >
        Continuar
      </Button>
    </header>
  );
};

export default Header;
