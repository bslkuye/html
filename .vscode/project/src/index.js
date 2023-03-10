import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD23EBXE9RM36uHUqHetRxnVDlAsTA-Ew4",
//   authDomain: "sblueproject-community.firebaseapp.com",
//   databaseURL: "https://sblueproject-community-default-rtdb.firebaseio.com",
//   projectId: "sblueproject-community",
//   storageBucket: "sblueproject-community.appspot.com",
//   messagingSenderId: "757072864776",
//   appId: "1:757072864776:web:42b9e6a189bed6c7eb93bd",
//   measurementId: "G-QSJQLGLB2V",
// };

// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export const db = firebase.firestore();
