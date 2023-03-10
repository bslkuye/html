import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
