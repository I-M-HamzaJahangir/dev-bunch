import styles from "./button.module.css";
const Button = ({ text, color = "#3563e9" }) => {
  return (
    <button
      type="button"
      className={styles.btn}
      style={{ backgroundColor: `${color}` }}
    >
      {text}
    </button>
  );
};

export default Button;
