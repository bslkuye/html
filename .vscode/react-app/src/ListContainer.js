import clsx from "clsx";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import styles from "./ListContainer.module.css";
import Pagination from "./components/Pagination";
import ListFilter from "./components/ListFilter";
import axios from "axios";
import OpenClosedFilters from "./components/OpenClosedFilters";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open ");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const maxPage = 10;
  // const [isOpenMode, setIsOpenMode] = useState(true);
  // const [checkedList, setcheckedList] = useState([]);

  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;
  const GITHUB_API = "https://api.github.com";

  async function getData(pageParam) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      { params: { page: pageParam } },
    );
    setList(data);
  }

  useEffect(() => {
    getData({ page, state: isOpenMode ? "open" : "closed" });
  }, [page, isOpenMode]);

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
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter onChangeFilter={(filteredData) => {}} />
          </ListItemLayout>
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
