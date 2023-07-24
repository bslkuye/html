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
add_obj("obj4.png");
add_obj("obj5.png");
add_obj("obj6.png");
add_obj("obj7.png");
add_obj("obj8.png");
add_obj("obj9.png");
add_obj("obj9.png");

//obj count
function countObj() {
  const objnum = document.querySelectorAll(".object");
  document.getElementById("obj_count").innerText = objnum.length / 9 + "/50";
  return objnum.length / 9;
}
countObj();

canvas.forEach((canvas) => {
  const div = document.createElement("div");

  div.className = "object obj2";

  canvas.after(div);
});

let background_obj_arr = [blackhole, deathStar, donut, earth, flet];

//블랙홀 그리기
function blackhole() {
  let image = new Image();
  image.src = "blackhole.png";
  image.onload = function () {
    for (let i = 0; i < 9; i++) {
      const ctx = canvas[i].getContext("2d");
      ctx.translate(blackhole_x, blackhole_y);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.drawImage(image, 0, 0);
      ctx.rotate((-1 * angle * Math.PI) / 180);
      ctx.translate(-1 * blackhole_x, -1 * blackhole_y);
    }
  };
}

blackhole();

let deathStar_x = getRandomInt(0, leng - 400) + 100;
let deathStar_y = getRandomInt(0, leng - 400) + 100;
let angle = getRandomInt(0, 361);

function deathStar() {
  let image = new Image();
  image.src = "deathStar.png";
  image.onload = function () {
    for (let i = 0; i < 9; i++) {
      const ctx = canvas[i].getContext("2d");
      ctx.translate(deathStar_x, deathStar_y);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.drawImage(image, 0, 0);
      ctx.rotate((-1 * angle * Math.PI) / 180);
      ctx.translate(-1 * deathStar_x, -1 * deathStar_y);
    }
  };
}

deathStar();

//지구 그리기
let donut_x = getRandomInt(0, leng - 400) + 100;
let donut_y = getRandomInt(0, leng - 400) + 100;
let donut_angle = getRandomInt(0, 361);

function donut() {
  let image = new Image();
  image.src = "donut.png";
  image.onload = function () {
    for (let i = 0; i < 9; i++) {
      const ctx = canvas[i].getContext("2d");
      ctx.translate(donut_x, donut_y);
      ctx.rotate((donut_angle * Math.PI) / 180);
      ctx.drawImage(image, 0, 0);
      ctx.rotate((-1 * donut_angle * Math.PI) / 180);
      ctx.translate(-1 * donut_x, -1 * donut_y);
    }
  };
}

donut();

let earth_x = getRandomInt(0, leng - 400) + 100;
let earth_y = getRandomInt(0, leng - 400) + 100;
let earth_angle = getRandomInt(0, 361);

function earth() {
  let image = new Image();
  image.src = "earth.png";
  image.onload = function () {
    for (let i = 0; i < 9; i++) {
      const ctx = canvas[i].getContext("2d");
      ctx.translate(earth_x, earth_y);
      ctx.rotate((earth_angle * Math.PI) / 180);
      ctx.drawImage(image, 0, 0);
      ctx.rotate((-1 * earth_angle * Math.PI) / 180);
      ctx.translate(-1 * earth_x, -1 * earth_y);
    }
  };
}

earth();

let flet_x = getRandomInt(0, leng - 400) + 100;
let flet_y = getRandomInt(0, leng - 400) + 100;
let flet_angle = getRandomInt(0, 361);

function flet() {
  let image = new Image();
  image.src = "flet.png";
  image.onload = function () {
    for (let i = 0; i < 9; i++) {
      const ctx = canvas[i].getContext("2d");
      ctx.translate(flet_x, flet_y);
      ctx.rotate((flet_angle * Math.PI) / 180);
      ctx.drawImage(image, 0, 0);
      ctx.rotate((-1 * flet_angle * Math.PI) / 180);
      ctx.translate(-1 * flet_x, -1 * flet_y);
    }
  };
}

flet();
//배경오브젝트 아이템창
let itmebox = document.getElementById("item");

let buttonbox = document.getElementById("buttonbox");
const backgroundObj = document.createElement("button");
backgroundObj.innerText = "backObj";
backgroundObj.className = "background_obj_button";
buttonbox.appendChild(backgroundObj);

//add button
var addbutton1 = document.getElementById("button1");
addbutton1.addEventListener("click", function () {
  if (countObj() < 50) {
    add_obj("obj1.png");
  }
});

var addbutton2 = document.getElementById("button2");
addbutton2.addEventListener("click", function () {
  if (score > 0 && countObj() < 50) {
    score--;
    document.getElementById("score").textContent = score;
    add_obj("obj" + getRandomInt(1, 10) + ".png");
  }
});

var addbutton3 = document.getElementById("button3");
addbutton3.addEventListener("click", reset());

function getrgb() {
  let r = 255;
  let g = getRandomInt(0, 256);
  let b = g;
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  if (getRandomInt(0, 100) < 90) {
    //주황색 적색
    g = getRandomInt(0, 100);
    r = getRandomInt(150, 256);
    b = g;
    rgb = "rgb(" + r + "," + g + "," + b + ")";
  } else if (getRandomInt(0, 100) > 10) {
    //노란색 주황색
    r = getRandomInt(150, 256);
    g = r;
    b = 0;
    rgb = "rgb(" + r + "," + g + "," + b + ")";
  } else if (getRandomInt(0, 100) > 50) {
    //흰색 푸른색
    b = getRandomInt(150, 256);
    g = 0;
    r = 0;
    rgb = "rgb(" + r + "," + g + "," + b + ")";
  } else {
    b = 255;
    g = 255;
    r = 255;
    rgb = "rgb(" + r + "," + g + "," + b + ")";
  }
  return rgb;
}

var addbutton4 = document.getElementById("button4");
addbutton4.addEventListener("click", function () {
  if (true) {
    // score--;
    // document.getElementById("score").textContent = score;
    for (let i = 0; i < 1000; i++) {
      if (getRandomInt(0, 6) != 0) {
        starArr[2]++;
        paintCell(getRandomInt(0, leng), getRandomInt(0, leng), getrgb());
      } else if (getRandomInt(0, 4) != 0) {
        starArr[1]++;
        paintCellMiddle(getRandomInt(0, leng), getRandomInt(0, leng), getrgb());
      } else {
        starArr[0]++;
        paintCellBig(getRandomInt(0, leng), getRandomInt(0, leng), getrgb());
      }
    }
    background_obj_arr.forEach(function (func) {
      func();
    });
  }
});

//astro초기 위치값 (obj과는 다르게 map전체를 움직여야 해서 아레와 같은 값을 가짐)
let x_position = -leng;
let y_position = -leng;

//캔버스 초기화
for (let i = 0; i < 9; i++) {
  canvas[i].width = leng;
  canvas[i].height = leng;
}
let a = 0;

//item box
let itembutton = document.getElementById("item_button");
itembutton.addEventListener("click", function () {
  let itemlist = document.getElementById("item");
  if (itemlist.className == "hidden") {
    itemlist.classList.add("active");
    itemlist.classList.remove("hidden");
  } else {
    itemlist.classList.remove("active");
    itemlist.classList.add("hidden");
  }
});
//a,b 충돌 체크(제거, 두 번 계산하고 있었음.), 충돌 후 운동량 계산
//* a, b = obj number */
function collisionMomentum(a, b) {
  let saveArr = [];
  let x = [...obj_info[a]];
  let y = [...obj_info[b]];
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
  if (obj_info[a][0] > obj_info[b][0]) {
    obj_info[b][0] -= 0.1;
  } else {
    obj_info[b][0] += 0.1;
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

let checkArrA = [];
let checkArrB = [];

let score = 0;

//충돌 체크, 스코어 상승
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
          checkArrB.push(i + "-" + j);
          if (checkArrA.includes(i + "-" + j)) {
            // 중복터치면
          } else {
            // 아니면 스코어 상승, checkarr에 정보 저장
            if (i == 0) {
              score += 10;
            }
            score++;
            document.getElementById("score").textContent = score;
          }
          collisionMomentum(i, j);
        }
      }
    }
  }
  checkArrA = checkArrB;
  checkArrB = [];
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

let starArr = [2000, 8000, 40000];

const makeStar = setInterval(() => {
  paintCellBig(getRandomInt(2, leng - 2), getRandomInt(2, leng - 2), getrgb());
  for (let i = 0; i < 4; i++) {
    paintCellMiddle(
      getRandomInt(1, leng - 1),
      getRandomInt(1, leng - 1),
      getrgb()
    );
  }
  for (let i = 0; i < 20; i++) {
    paintCell(getRandomInt(0, leng), getRandomInt(0, leng), getrgb());
  }
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
countObj();

setTimeout(() => {
  clearTimeout(makeStar);
  background_obj_arr.forEach(function (func) {
    func();
  });
  setInterval(() => {
    astroMove();
    objMove();
    touchCheck();
  }, 1000 / 60);
}, 8000);

function reset() {
  // countObj();
  // setTimeout(() => {
  //   clearTimeout(makeStar);
  //   setInterval(() => {
  //     astroMove();
  //     objMove();
  //     touchCheck();
  //   }, 1000 / 60);
  // }, 4000);
}
