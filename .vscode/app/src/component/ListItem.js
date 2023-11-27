import Badge from "./Badge";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import dayjs from "dayjs";

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;
  const state = data.state === "open" ? "opened" : "closed";
  const date = data.state === "open" ? data.created_at : data.closed_at;

  const givenDate = new Date(date);

  // 현재 시간을 나타내는 Date 객체를 생성합니다.
  const currentDate = new Date();

  // 두 Date 객체 간의 차이를 밀리초(ms)로 계산합니다.
  const timeDifference = givenDate - currentDate;

  // 차이를 밀리초(ms)에서 분(min)으로 변환합니다.
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps}></Badge>
            ))}
        </div>
        <div className={styles.discription}>
          #{data.number} {state} {minutesDifference} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
}
