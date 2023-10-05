import Badge from "./Badge";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  badges,
}) {
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          issue example
          {badges &&
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps}></Badge>
            ))}
        </div>
        <div className={styles.discription}># discription</div>
      </div>
    </ListItemLayout>
  );
}
