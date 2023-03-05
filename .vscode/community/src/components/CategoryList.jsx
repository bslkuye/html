import { Link } from "react-router-dom";
import React from "react";

const CategoryList = () => {
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

  // const databaseRef = firebase.database().ref();
  // databaseRef.once("value").then((snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  // });npx create-react-app 파일명

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // const db = firebase.database().ref("category").limitToLast(10);
  // db.once("index", (snapshot) => {
  //   snapshot.val();
  // });

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const databaseRef = firebase.database().ref();
  //   databaseRef.once("value").then((snapshot) => {
  //     const data = snapshot.val();
  //     console.log("data", data);
  //     setData(data);
  //   });
  // }, []);

  // const ref = firebase.database().ref("category");
  // ref.once("value", (snapshot) => {
  //   const data = snapshot.val();
  //   const titles = data.category1.map((category) => category.title);
  //   console.log(titles);
  // });

  // const dataURL = 'https://sblueproject-community-default-rtdb.firebaseio.com/category';

  // fetch(dataURL)
  // .then(response => response.json())
  // .then((data: any) => {
  //   console.log('data',data);
  //   // 여기서 데이터를 가지고 할 일을 처리합니다.
  // })
  // .catch((error: Error) => console.error(error));

  return (
    <div className="w-48 border-2 h-screen inline">
      <div className="m-1">
        <Link to="category1">카테고리1</Link>
      </div>
      <div className="m-1">
        <Link to="category2">카테고리2</Link>
      </div>
      <div className="m-1">
        <Link to="category3">카테고리3</Link>
      </div>
    </div>
  );
};

export default CategoryList;
