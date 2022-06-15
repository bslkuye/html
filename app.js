// const day = ['mon', 'tue', 'wed', 'tue', 'fri', 'sat', 'sun'];

// console.log(day[1]);

// const playerName = 'name';
// const playerPoint = 1212;
// const playerA = 'a';

// const player = {
//   name : 'name',
//   point : 1212,
//   aa : true,
// };
// console.log(player.aa);
// player.aa = false; // object는 const지만 안의 내용은 수정 가능
// console.log(player.aa);

// console.log(player);

// console.log(player.name);
// console.log(player['name']);

// player.lastName = 'lastname';

// console.log(player);


// function sayHello(name, age) {
//   console.log("hello "+ name+ " " + age);
// }

// sayHello('name',1);
// sayHello('nameA',11);
// sayHello('nameB',223);

// function plus(a, b) {
//   console.log(a+b);
// }

// plus(12,23);

// const player = {
//   name : "myName",
//   hello: function(otherName) {
//     console.log("hello " + otherName + " my name is " + player.name);
//   },
// };

// console.log(player.name);
// player.hello("otherName");

// const player = {
//   name: 'jdh',
//   age: 27,
// };

// console.log(player.name = 'Jung dh');

// console.log(player.name)
// console.log(console);

// function plus(a, b) {
//   console.log(a+b);
// }

// plus(1,2);
// plus(123,4541);

// alert('aaaaa');

// const calculator = {
//   plus: function (a,b) {
//     console.log(a+b);
//   },
//   minus: function (a,b) {
//     console.log(a-b);
//   },
// };

// calculator.plus(1,2);
// calculator.minus(22,12)

// const age = 23;
// function calculateKrAge(age) {
//   return age + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

// const age = parseInt(prompt('How old are you?'));

// console.log(isNaN(age));

// if (isNaN(age) == false) {
//   console.log('input is num');
// } else {
//   console.log('input is nan');
// }

// document.title = "hello from js";

// const title = document.getElementById("title");

// console.dir(title);
// title.innerText = 'Got you!';

// const hellos = document.getElementsByClassName("hello");
// //hello class 전부를 가져온다.
// console.log(hellos);

// const title = document.querySelector("h1");//class 내부에 있는 h1 을 가져올 수 있다. css처럼 가져옴
// const title = document.querySelector(".hello h1"); // 같은게 많을때 첫번째것만 가져옴
// const title = document.querySelector("div h1");
const title = document.querySelectorAll(".hello h1"); // 다 가져오고 싶을때 쓰는 function

// const title = document.querySelector("#hello");//아레와 같은 역할을 하는 코드
// const title = document.getElementById("hello");//위와 같음
console.log(title);