import clsx from "clsx";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import styles from "./ListContainer.module.css";
import Pagination from "./components/Pagination";
import ListFilter from "./components/ListFilter";
import axios from "axios";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const maxPage = 10;
  // const [isOpenMode, setIsOpenMode] = useState(true);
  // const [checkedList, setcheckedList] = useState([]);

  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;

  async function getData() {
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`,
    );
    setList(data);
    // console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter onChangeFilter={(filteredData) => {}} />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((item) => (
            <ListItem
              data={item}
              key={item.id}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);

  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={clsx(styles.textFilter, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
