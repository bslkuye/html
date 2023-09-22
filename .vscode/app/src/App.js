import { Children, useEffect, useState } from "react";
import React from "react";
import styles from "./App.module.css";
import Button from "./component/Button.js";
import Space from "./component/Space";
import Header from "./header";

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <div className={styles.listContainer}>
        <Button
          style={{ fontsize: "14px", backgroundColor: "green", color: "white" }}
        >
          New Issue
        </Button>
      </div>
      <div className={styles.footer}>Footer</div>
    </>
  );
}

export default App;
