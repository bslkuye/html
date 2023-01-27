import styles from "./ListItemLayout.module.css";
import clsx from "clsx";

export default function ListItemLayout({ children, className }) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
}
