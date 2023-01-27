import styles from "./Modal.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    // setFilteredData(searchDataList.filter((item) => item.some("...")));
  }, [searchDataList, searchValue]);

  // useEffect(() => {
  //   console.log({ searchValue });
  // }, [searchValue]);

  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>✕</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>
      {filteredData.map((data) => (
        <div key={data}>{data}</div>
      ))}
    </div>
  );
}
