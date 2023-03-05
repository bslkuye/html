import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navBox}>
        <h1 className={styles.navTitle}>
          <Link to="/" className={styles.navTitleText}>
            Site Title
          </Link>
        </h1>

        <Link to="category1" className={styles.categoryTitle}>
          인기 카테고리1
        </Link>
        <Link to="category2" className={styles.categoryTitle}>
          인기 카테고리2
        </Link>
        <Link to="category3" className={styles.categoryTitle}>
          인기 카테고리3
        </Link>
      </div>
      <div className={styles.login}>
        <Link to="/login">로그아웃</Link>
        <div></div>
        <Link to="/my">마이페이지</Link>
      </div>
    </div>
  );
};

export default Nav;
