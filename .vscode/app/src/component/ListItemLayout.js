import { Children } from "react";
import styles from "./ListItemLayout.module.css";

export default function ListItemLayout() {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {Children}
    </div>
  );
}
