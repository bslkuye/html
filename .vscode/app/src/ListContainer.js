import styles from "./ListContainer.module.css";
import Button from "./component/Button";

export default function ListContainer() {
  return (
    <div className={styles.listContainer}>
      <Button
        style={{ fontsize: "14px", backgroundColor: "green", color: "white" }}
      >
        New Issue
      </Button>
    </div>
  );
}
