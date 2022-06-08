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


function sayHello(name, age) {
  console.log("hello "+ name+ " " + age);
}

sayHello('name',1);
sayHello('nameA',11);
sayHello('nameB',223);0

function plus(a, b) {
  console.log(a+b);
}

plus(12,23);

const player = {
  name : "myName",
  hello: function(otherName) {
    console.log("hello " + otherName + " my name is " + player.name);
  },
};

console.log(player.name);
player.hello("otherName");

