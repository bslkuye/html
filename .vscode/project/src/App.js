import { HashRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import React from "react";

import Nav from "./components/Nav";
import Error from "./views/Error";

import Longin from "./views/Login";
import MainPage from "./views/MainPage";
import MyPage from "./views/MyPage";
import Category1 from "./views/Category";
import Page from "./views/Page";
import styles from "./App.module.css";
const App = () => {
  return (
    <HashRouter>
      <section className={styles.drawer}>
        <Nav />
        <section className={styles.mainBox}>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Longin />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/category1" element={<Category1 />} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </section>
      </section>
    </HashRouter>
  );
};

export default App;
