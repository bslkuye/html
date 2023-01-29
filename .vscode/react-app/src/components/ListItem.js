import Badge from "./Badge";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import dayjs from "dayjs";

export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;
  const state = data.state === "open" ? "opened" : "closed";
  const date = data.state === "open" ? data.created_at : data.closed_at;

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
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} Description
        </div>
      </div>
    </ListItemLayout>
  );
}
