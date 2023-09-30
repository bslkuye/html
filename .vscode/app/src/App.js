import { Children, useEffect, useState } from "react";
import React from "react";
import styles from "./App.module.css";
import Button from "./component/Button.js";
import Space from "./component/Space";
import Header from "./header";
import ListContainer from "./ListContainer";

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <div className={styles.footer}>Footer</div>
    </>
  );
}

export default App;
