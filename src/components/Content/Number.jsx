import styles from "./content.module.css";

function Number({ value }) {
  return <h1 className={styles.number}>{value}</h1>;
}

export default Number;
