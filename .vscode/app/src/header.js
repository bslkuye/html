import styles from "./Header.module.css";
import Button from "./component/Button";
import Space from "./component/Space";
import Tabs from "./component/Tabs";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button
          style={{
            fontsize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Watch
        </Button>
        <Space />
        <Button
          style={{
            fontsize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Fork <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button
          style={{
            fontsize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Star
        </Button>
      </div>
      <Tabs title="title" number={5} />
    </div>
  );
}
