import Button from "../Button/Button";
import styles from "./Header.module.css";
import logo from "../../../public/Logo2.png"
const Header = () => {
  return (
    <header className={styles.header}>
      <Button variant="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-panel-left-close-icon lucide-panel-left-close"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="m16 15-3-3 3-3" />
        </svg>
      </Button>
      <a className={styles.logo}>
        <img className={styles.logo} src={logo} alt="imagen logo" />
      </a>
    </header>
  );
};

export default Header;
