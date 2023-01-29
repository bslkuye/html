import Badge from "./Badge";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";

export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.lables;
  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges && //badges가 있으면
            badges.map((badgeProps, idx) => (
              <Badge key={`${idx}`} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}
