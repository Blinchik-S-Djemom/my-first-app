import styles from "./button.module.css";

export default function Button({ onClick, children, variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
