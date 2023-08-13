import React from "react";
import styles from "./onoffbutton.module.css";

const onoffButton = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox"></input>
      <span className={styles.slider}></span>
    </label>
  );
};

export default onoffButton;
