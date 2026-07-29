
import styles from "./Button.module.css";

const Button = ({
    children,
    onClick,
    variant = "primary",
    disabled = false,
    type = "button",
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;