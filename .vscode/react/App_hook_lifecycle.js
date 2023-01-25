// import "./App.css";
// import React, { useEffect, useState } from "react";

// function App() {
//   //useEffect hook 사용해보기
//   /**
//  mount 리액트 컴포넌트가 그려질 때 랜더 될 때
//  unmount리액트 컴포넌트가 사라질 때 지워질 때
//  update 특정 값이 변해서 래액트 컴포넌트가 다시 그려질 때
//  */
//   const [count, setCount] = useState(0);

//   // if (!count) {
//   //   return
//   // } // hook 이 최상위가 아니므로 오류

//   useEffect(() => {
//     if (count === 5) {
//       console.log("this is five");
//     }
//   });

//   useEffect(() => console.log("hello"), [count]); // count가 변할때마다 호출됨 update
//   useEffect(() => console.log("hello"), []); // mount
//   useEffect(() => console.log("hello")); // unmount

//   //lifecycle 생명주기 메소드
//   /**
//    * dom이 생성, 업데이트, 제거될 때 어떤 행동을 할지 결정하는 메소드
//    */

//   //hook 사용 규칙
//   /**
//    * 최상위에서 호출되어야 한다.
//    * 오직 react함수에서만 hook을 호출해야 한다.
//    */

//   return <div className="App"></div>;
// }

// function example() {
//   // react함수 외부에 hook이 호출되어 오류 / 분류를 위해 외부에서 호출하기 위해서는 useExample처럼 use를 붙여야 함
//   useEffect(() => {
//     console.log("hello");
//   });
// }

// export default App;
