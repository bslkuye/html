const canvas = document.querySelectorAll(".map");
const space = document.querySelector(".space");
const astro = document.querySelector(".characters");
const ctx = canvas[0].getContext("2d");

const leng = 2000;
document.documentElement.style.setProperty("--width", leng + "px");

/** [x_position, y_position, x_speed, y_speed, deg, spin] */
let obj_info = [
  [leng / 2, leng / 2, 0, 0, 0, 0.1],
  [0, 0, 6, -6, 0, 1],
];

let x_position = -leng;
let y_position = -leng;

for (let i = 0; i < 9; i++) {
  console.log(i);
  canvas[i].width = leng;
  canvas[i].height = leng;
}
let a = 0;

function check() {
  let checkArr = obj_info.map((v) => [...v]);
  for (let i = 0; i < obj_info.length; i++) {
    for (let j = i; j < obj_info.length; j++) {
      if (i != j) {
        if (
          (obj_info[i][0] - obj_info[j][0]) ** 2 +
            (obj_info[i][1] - obj_info[j][1]) ** 2 <
          10000
        ) {
          a =
            ((obj_info[j][0] - obj_info[i][0]) /
              (obj_info[j][1] - obj_info[i][1])) *
            (obj_info[j][3] / obj_info[j][2]);
          console.log("a", a);

          checkArr = obj_info.map((v) => [...v]);
          console.log("touch", i, j, obj_info, checkArr);
          obj_info[i][2] += obj_info[j][2] * a;
          obj_info[i][3] += obj_info[j][3] * a;
          obj_info[j][2] -= obj_info[j][2] * a;
          obj_info[j][3] -= obj_info[j][3] * a;
        }
      }
    }
    // obj_info = checkArr.map((v) => [...v]);
  }
}

// if (
//   (obj_info[i][0] - obj_info[j][0] + leng) ** 2 +
//     (obj_info[i][1] - obj_info[j][1]) ** 2 <
//     10000 ||
//   (obj_info[i][0] - obj_info[j][0] - leng) ** 2 +
//     (obj_info[i][1] - obj_info[j][1]) ** 2 <
//     10000 ||
//   (obj_info[i][0] - obj_info[j][0]) ** 2 +
//     (obj_info[i][1] - obj_info[j][1] + leng) ** 2 <
//     10000 ||
//   (obj_info[i][0] - obj_info[j][0]) ** 2 +
//     (obj_info[i][1] - obj_info[j][1] - leng) ** 2 <
//     10000
// ) {
// }
function touchCheck() {
  if (x_position > -1 * leng * 0.5) x_position -= leng;
  if (x_position < -1 * leng * 1.5) x_position += leng;
  if (y_position > -1 * leng * 0.5) y_position -= leng;
  if (y_position < -1 * leng * 1.5) y_position += leng;
}

function objTouch(arr) {
  if (arr[0] > leng) arr[0] -= leng;
  if (arr[0] < 0) arr[0] += leng;
  if (arr[1] > leng) arr[1] -= leng;
  if (arr[1] < 0) arr[1] += leng;
}

function paintCell(x, y, color, alpha) {
  for (let i = 0; i < 9; i++) {
    const ctx = canvas[i].getContext("2d");
    ctx.beginPath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.rect(x, y, 1, 1);
    ctx.fill();
  }
}

function paintCellBig(x, y, color, alpha) {
  for (let i = 0; i < 9; i++) {
    const ctx = canvas[i].getContext("2d");
    ctx.beginPath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.rect(x - 2, y, 5, 1);
    ctx.fill();
    ctx.rect(x, y - 2, 1, 5);
    ctx.fill();
  }
}

function paintCellMiddle(x, y, color, alpha) {
  for (let i = 0; i < 9; i++) {
    const ctx = canvas[i].getContext("2d");
    ctx.beginPath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.rect(x - 1, y, 3, 1);
    ctx.fill();
    ctx.rect(x, y - 1, 1, 3);
    ctx.fill();
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const makeStar = setInterval(() => {
  getRandomInt(0, leng, Math.random());

  paintCellBig(getRandomInt(2, leng - 2), getRandomInt(2, leng - 2), "white");
  paintCellBig(
    getRandomInt(2, leng - 2),
    getRandomInt(2, leng - 2),
    "rgb(0, 150, 255)"
  );
  paintCellMiddle(
    getRandomInt(1, leng - 1),
    getRandomInt(1, leng - 1),
    "white"
  );
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "white");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "rgb(255, 100, 100)");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "rgb(0, 150, 255)");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "white");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "rgb(255, 100, 100)");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "rgb(0, 150, 255)");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "white");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "rgb(255, 100, 100)");
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), "rgb(0, 150, 255)");
}, 1);

let spin = 0.1;
let deg = 0;

function astroSpin() {
  astro.style.setProperty("--deg", deg);
  deg = (deg + spin) % 360;
}

let x_speed = -2;
let y_speed = 0;

function astroMove() {
  x_position += obj_info[0][2];
  y_position += obj_info[0][3];
  space.style.setProperty("--x-position", x_position + "px");
  space.style.setProperty("--y-position", y_position + "px");
  obj_info[0][0] = x_position * -1 - leng / 2;
  obj_info[0][1] = y_position * -1 - leng / 2;
  check();
  astroSpin();
}
const obj = document.querySelectorAll(".object");

function objMove() {
  for (let i = 1; i < obj_info.length; i++) {
    obj_info[i][0] += obj_info[i][2];
    obj_info[i][1] += obj_info[i][3];
    obj_info[i][4] += obj_info[i][5];
    objTouch(obj_info[i]);
    for (let j = 0; j < 9; j++) {
      obj[j].style.setProperty("--x-position", obj_info[i][0] + "px");
      obj[j].style.setProperty("--y-position", obj_info[i][1] + "px");
      obj[j].style.setProperty("--deg", obj_info[i][4]);
    }
  }
}
console.log(obj_info);
setTimeout(() => {
  clearTimeout(makeStar);
  setInterval(() => {
    touchCheck();
    astroMove();
    objMove();
  }, 16);
}, 1000);

/**
item - 
배경 별 : 색, 크기, 개수, 특별한 모양
배경 obj : 우주선, 우주인, 작은 행성, 성운
obj : 사진 직접 추가로 날아다니게 , 크기

캔버스마다 오브젝트를 넣어서 포지션을 복잡하게 안해도 되게

-1000 = -leng - 1000
-3000 = 2000
 */
