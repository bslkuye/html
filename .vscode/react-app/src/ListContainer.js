import clsx from "clsx";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import styles from "./ListContainer.module.css";
import Modal from "./components/Modal";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  // const [isOpenMode, setIsOpenMode] = useState(true);
  // const [checkedList, setcheckedList] = useState([]);

  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{ fontSize: "14px", backgroundColor: "green", color: "white" }}
        >
          New Issue
        </Button>
      </div>
      <OpenClosedFilters />
      <ListItemLayout className={styles.listFilter}>
        <ListFilter onChangeFilter={(filteredData) => {}} />
      </ListItemLayout>
      <div className={styles.container}>
        {list.map((ListItem, index) => (
          <ListItem
            // checked={checkedList.filter((item) => item.id === "0")[0]}
            // onChangeCheckBox={() =>
            //   setcheckedList((checkedList) => [...checkedList, "0"])
            // }
            key={index}
            badges={[
              {
                color: "red",
                title: "Bug",
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
}

function ListFilterItem({ onClick, children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        placeholder="Filters labels"
        searchDataList={["bug", "labels", "apple"]}
        onClickCell={() => {
          onChangeFilter();
        }}
      />
    </>
  );
}

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterList}>
        <ListFilterItem>author</ListFilterItem>
        <ListFilterItem>lable</ListFilterItem>
        <ListFilterItem>projects</ListFilterItem>
        <ListFilterItem>milestones</ListFilterItem>
        <ListFilterItem>assignee</ListFilterItem>
        <ListFilterItem>sort</ListFilterItem>
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
