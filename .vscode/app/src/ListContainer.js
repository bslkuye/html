import styles from "./ListContainer.module.css";
import Button from "./component/Button";
import { useEffect, useState } from "react";
import ListItem from "./component/ListItem";
import ListItemLayout from "./component/ListItemLayout";
import clsx from "clsx";
import Modal from "./component/Modal";
import Pagination from "./component/Pagination";
import axios from "axios";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  async function getData(pageParam) {
    const data = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`,
      { params: { page: page } },
    );
    setList(data.data);
  }
  useEffect(() => {
    getData(page);
  }, [page]);
  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <Button
            style={{
              fontsize: "14px",
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

        {list.map((item) => (
          <ListItem
            data={item}
            key={item.id}
            checked={checked}
            onclickCheckbox={() => setChecked((checked) => !checked)}
          />
        ))}
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

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterLists}>
        <ListfilterItem>Author</ListfilterItem>
        <ListfilterItem>Lable</ListfilterItem>
        <ListfilterItem>Projects</ListfilterItem>
        <ListfilterItem>Milestones</ListfilterItem>
        <ListfilterItem>Assignee</ListfilterItem>
        <ListfilterItem>Sort</ListfilterItem>
      </div>
    </>
  );
}

function ListfilterItem({ onClick, children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter lables"
          searchDataList={["bug", "lables", "apple"]}
          onClickCell={() => {
            onChangeFilter();
          }}
        />
      </div>
    </div>
  );
}

function OpenClosedFilters() {
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
      className={clsx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size}
      {state}
    </span>
  );
}
