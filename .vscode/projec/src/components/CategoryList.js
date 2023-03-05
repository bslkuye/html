import { Link } from "react-router-dom";
import React from "react";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.categoryBox}>
      <div className={styles.categoryTitle}>
        <Link to="category1">카테고리1</Link>
      </div>
      <div className={styles.categoryTitle}>
        <Link to="category2">카테고리2</Link>
      </div>
      <div className={styles.categoryTitle}>
        <Link to="category3">카테고리3</Link>
      </div>
    </div>
  );
};

export default CategoryList;
