import { Children, useEffect, useState } from "react";
import React from "react";
import styles from "./App.module.css";
import Button from "./component/Button.js";
import Space from "./component/Space";
import Header from "./header";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
import axios from "axios";
function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;
