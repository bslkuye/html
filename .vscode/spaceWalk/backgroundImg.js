const canvas = document.querySelectorAll(".map");
const space = document.querySelector(".space");
const astro = document.querySelector(".characters");
const ctx = canvas[0].getContext("2d");

const leng = 5000;
const characterWidth = 30;
document.documentElement.style.setProperty("--width", leng + "px");

// 오브젝트 정보
/** [x_position, y_position, x_speed, y_speed, deg, spin] */
let obj_info = [
  [leng / 2, leng / 2, 0.3, 0.1, 0, 0.2],
  [0, 120, 1, 2, 0, 1],
  [300, 300, 2, 1, 1, 0.4],
];

console.log(obj_info.length);

//오브젝트 추가
function add_obj(object_img) {
  canvas.forEach((canvas) => {
    const div = document.createElement("div");
    div.className = "object obj" + obj_info.length;
    div.style.backgroundImage = "url(" + object_img + ")";
    canvas.after(div);
  });
  const randa = Math.floor(Math.random() * leng);
  const randb = Math.floor(Math.random() * leng);
  const randx = Math.random() * 4 - 2;
  const randy = Math.random() * 4 - 2;

  obj_info.push([randa, randb, randx, randy, 0, randx]);
}

add_obj("obj.png");
add_obj("obj1.png");
add_obj("obj1.png");
add_obj("obj3.png");
add_obj("obj3.png");

canvas.forEach((canvas) => {
  const div = document.createElement("div");

  div.className = "object obj2";

  canvas.after(div);
});

var addbutton = document.getElementById("button1");
addbutton.addEventListener("click", function () {
  add_obj("obj1.png");
});

var addbutton = document.getElementById("button2");
addbutton.addEventListener("click", function () {
  add_obj("obj" + getRandomInt(1, 7) + ".png");
});

var addbutton = document.getElementById("button2");
addbutton.addEventListener("click", function () {
  add_obj("astro" + getRandomInt(1, 3) + ".png");
});
// addbutton.addEventListener("click", add_obj("obj1.png"));

//astro초기 위치값 (obj과는 다르게 map전체를 움직여야 해서 아레와 같은 값을 가짐)
let x_position = -leng;
let y_position = -leng;

//캔버스 초기화
for (let i = 0; i < 9; i++) {
  canvas[i].width = leng;
  canvas[i].height = leng;
}
let a = 0;

//a,b 충돌 체크(제거, 두 번 계산하고 있었음.), 충돌 후 운동량 계산
//* a, b = obj number */
function collisionMomentum(a, b) {
  let saveArr = [];
  let x = [...obj_info[a]];
  let y = [...obj_info[b]];
  // if ((x[0] - y[0]) ** 2 >= 10000) {
  //   if (x[0] > y[0]) {
  //     x[0] -= leng / 2;
  //     y[0] += leng / 2;
  //   } else if (x[0] < y[0]) {
  //     x[0] += leng / 2;
  //     y[0] -= leng / 2;
  //   }
  // }
  // if ((x[1] - y[1]) ** 2 >= 10000) {
  //   if (x[1] > y[1]) {
  //     x[1] -= leng / 2;
  //     y[1] += leng / 2;
  //   } else if (x[1] < y[1]) {
  //     x[1] += leng / 2;
  //     y[1] -= leng / 2;
  //   }
  // }
  saveArr[0] =
    (x[2] * (x[1] - y[1]) ** 2 +
      y[2] * (x[0] - y[0]) ** 2 +
      (-1 * x[3] + y[3]) * (x[0] - y[0]) * (x[1] - y[1])) /
    ((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
  saveArr[1] =
    (y[3] * (x[1] - y[1]) ** 2 +
      x[3] * (x[0] - y[0]) ** 2 +
      (-1 * x[2] + y[2]) * (x[0] - y[0]) * (x[1] - y[1])) /
    ((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
  y = [...obj_info[a]];
  x = [...obj_info[b]];

  saveArr[2] =
    (x[2] * (x[1] - y[1]) ** 2 +
      y[2] * (x[0] - y[0]) ** 2 +
      (-1 * x[3] + y[3]) * (x[0] - y[0]) * (x[1] - y[1])) /
    ((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
  saveArr[3] =
    (y[3] * (x[1] - y[1]) ** 2 +
      x[3] * (x[0] - y[0]) ** 2 +
      (-1 * x[2] + y[2]) * (x[0] - y[0]) * (x[1] - y[1])) /
    ((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
  // console.log(saveArr, "savearr");
  if (obj_info[a][0] > obj_info[b][0]) {
    obj_info[b][0] -= 0.1;
  } else {
    obj_info[b][0] += 0.1;
    console.log("out");
  }
  obj_info[a][2] = saveArr[0];
  obj_info[a][3] = saveArr[1];
  obj_info[b][2] = saveArr[2];
  obj_info[b][3] = saveArr[3];
}

//토크값 계산
function torque(a, b) {
  obj_info[b][5] +=
    (obj_info[a][2] * (obj_info[a][1] - obj_info[b][1]) -
      obj_info[a][3] * (obj_info[a][0] - obj_info[b][0])) *
    0.6;
}

let overx;
let overy;

//충돌 체크
function check() {
  for (let i = 0; i < obj_info.length; i++) {
    for (let j = i; j < obj_info.length; j++) {
      if (i != j) {
        overx = Math.min(
          (obj_info[i][0] - obj_info[j][0]) ** 2,
          (obj_info[i][0] - obj_info[j][0] - leng) ** 2,
          (obj_info[i][0] - obj_info[j][0] + leng) ** 2
        );
        overy = Math.min(
          (obj_info[i][1] - obj_info[j][1]) ** 2,
          (obj_info[i][1] - obj_info[j][1] - leng) ** 2,
          (obj_info[i][1] - obj_info[j][1] + leng) ** 2
        );

        if (overx + overy <= characterWidth ** 2) {
          console.log("touch!", i, j);
          collisionMomentum(i, j);
        }
        // if (
        //   //정상적인 충돌
        //   (obj_info[i][0] - obj_info[j][0]) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1]) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // } else if (
        //   //x 예외
        //   (obj_info[i][0] - obj_info[j][0] - leng) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1]) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // } else if (
        //   //y 예외
        //   (obj_info[i][0] - obj_info[j][0]) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1] - leng) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // } else if (
        //   //x,y 예외
        //   (obj_info[i][0] - obj_info[j][0] - leng) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1] - leng) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // } else if (
        //   //x 예외
        //   (obj_info[i][0] - obj_info[j][0] + leng) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1]) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // } else if (
        //   //y 예외
        //   (obj_info[i][0] - obj_info[j][0]) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1] + leng) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // } else if (
        //   //x,y 예외
        //   (obj_info[i][0] - obj_info[j][0] + leng) ** 2 +
        //     (obj_info[i][1] - obj_info[j][1] + leng) ** 2 <
        //   10000
        // ) {
        //   console.log("touch");
        //   collisionMomentum(i, j);
        //   console.log(obj_info, "info");
        // }
      }
    }
  }
}

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
  paintCellMiddle(
    getRandomInt(1, leng - 1),
    getRandomInt(1, leng - 1),
    "rgb(0, 150, 255)"
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

function astroSpin() {
  astro.style.setProperty("--deg", obj_info[0][4]);
  obj_info[0][4] += obj_info[0][5];
}

function astroMove() {
  x_position -= obj_info[0][2];
  y_position -= obj_info[0][3];
  space.style.setProperty("--x-position", x_position + "px");
  space.style.setProperty("--y-position", y_position + "px");
  obj_info[0][0] = x_position * -1 - leng / 2;
  obj_info[0][1] = y_position * -1 - leng / 2;
  check();
  astroSpin();
}

function objMove() {
  for (let i = 1; i < obj_info.length; i++) {
    const obj = document.querySelectorAll(".obj" + i);
    obj_info[i][0] += obj_info[i][2];
    obj_info[i][1] += obj_info[i][3];
    obj_info[i][4] = (obj_info[i][4] + obj_info[i][5]) % 360;
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
    astroMove();
    objMove();
    touchCheck();
  }, 1000 / 60);
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
