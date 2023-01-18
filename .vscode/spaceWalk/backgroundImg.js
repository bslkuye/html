const canvas = document.querySelector(".canvas");
const astro = document.getElementsByClassName("characters");
const ctx = canvas.getContext("2d");

const leng = 3000;

let x_position = 0;
let y_position = 0;

canvas.width = leng;
canvas.height = leng;

function touchCheck(){
  if(x_position < -2450 && x_position > 450) x_speed *= -1;
  if(y_position < -2450 && y_position > 450) y_speed *= -1;
}

function paintCell(x, y, alpha) {
  ctx.beginPath();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = 'white';
  ctx.rect(x, y, 1, 1);
  ctx.fill();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const makeStar = setInterval(() => {
  getRandomInt(0, leng, Math.random());
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng));
  astroSpin();
}, 10);

let spin = 1;
let deg = 0;

function astroSpin() {
  document.documentElement.style.setProperty('--deg', deg + spin);
  deg = (deg + spin) % 360;
}

let x_speed = 0.1;
let y_speed = 1;

setTimeout(() => {
  clearTimeout(makeStar);
  setInterval(() => {
    x_position += x_speed;
    y_position += y_speed;
    canvas.style.setProperty('--x-position', x_position + 'px');
    canvas.style.setProperty('--y-position', y_position + 'px');
    astroSpin();
    touchCheck();
  }, 10);
}, 10000);




