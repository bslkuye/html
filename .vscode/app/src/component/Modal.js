import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

export default function ({
  title,
  onClose,
  opened,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchValue, setSearchValue] = useState();
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    // setFilteredData(
    //   searchDataList.filter((item) => item.includes(searchValue)),
    // );
  }, [searchValue, searchDataList]);
  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>x</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>
      {filteredData.map((data) => (
        <div key={data} onClick={onClickCell} role="button">
          {data}
        </div>
      ))}
    </div>
  );
}
