import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD23EBXE9RM36uHUqHetRxnVDlAsTA-Ew4",
  authDomain: "sblueproject-community.firebaseapp.com",
  databaseURL: "https://sblueproject-community-default-rtdb.firebaseio.com",
  projectId: "sblueproject-community",
  storageBucket: "sblueproject-community.appspot.com",
  messagingSenderId: "757072864776",
  appId: "1:757072864776:web:42b9e6a189bed6c7eb93bd",
  measurementId: "G-QSJQLGLB2V",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
