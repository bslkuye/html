import styles from "./ListFilter.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function ListFilter({ onChangeFilter }) {
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

function ListFilterItem({ onClick, children, onChangeFilter }) {
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
          placeholder="Filters labels"
          searchDataList={["bug", "labels", "apple"]}
          onClickCell={() => {
            onChangeFilter();
          }}
        />
      </div>
    </div>
  );
}
