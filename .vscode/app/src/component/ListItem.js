import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";

export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          issue example
        </div>
        <div className={styles.discription}># discription</div>
      </div>
    </ListItemLayout>
  );
}
