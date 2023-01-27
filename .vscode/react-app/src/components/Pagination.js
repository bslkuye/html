import styles from "./Pagination.module.css";
import clsx from "clsx";

export default function Pagination({
  currentPage,
  maxPage,
  onClickPageButton,
}) {
  return (
    <div>
      <button
        className={clsx(styles.button, styles.blueButton, {
          [styles.disabled]: currentPage === 1,
        })}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          key={i}
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
        />
      ))}
      <button
        className={clsx(styles.button, styles.blueButton, {
          [styles.disabled]: currentPage === maxPage,
        })}
      >
        {"Next >"}
      </button>
    </div>
  );
}

function PageButton({ onClick, number, selected }) {
  return (
    <button
      className={clsx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}
