import styles from "./App.module.css";
import axios from "axios";

import Button from "./components/Button";
import Header from "./Header";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
import { useEffect } from "react";

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
