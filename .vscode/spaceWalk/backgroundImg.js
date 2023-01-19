const canvas = document.querySelector(".canvas");
const space = document.querySelector('.space')
const astro = document.getElementsByClassName("characters");
const ctx = canvas.getContext("2d");

const leng = 3000;

let x_position = 0;
let y_position = 0;

canvas.width = leng;
canvas.height = leng;

function touchCheck(){
  if(x_position < -2450 || x_position > 450) x_speed *= -1;
  if(y_position < -2450 || y_position > 450) y_speed *= -1;
}

function paintCell(x, y, color, alpha) {
  ctx.beginPath();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.rect(x, y, 1, 1);
  ctx.fill();
}

function paintCellBig(x, y, color, alpha) {
  ctx.beginPath();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.rect(x - 2, y, 5, 1);
  ctx.fill();
  ctx.rect(x, y - 2, 1, 5);
  ctx.fill();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const makeStar = setInterval(() => {
  getRandomInt(0, leng, Math.random());
  
  paintCellBig(getRandomInt(0, leng), getRandomInt(0, leng), 'white');
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), 'white');
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), 'rgb(255, 100, 100)');
  paintCell(getRandomInt(0, leng), getRandomInt(0, leng), 'rgb(0, 150, 255)');
  astroSpin();
}, 1);

let spin = 0.1;
let deg = 0;

function astroSpin() {
  document.documentElement.style.setProperty('--deg', deg + spin);
  deg = (deg + spin) % 360;
}

let x_speed = 0.2;
let y_speed = 0.1;

setTimeout(() => {
  clearTimeout(makeStar);
  setInterval(() => {
    x_position += x_speed;
    y_position += y_speed;
    space.style.setProperty('--x-position', x_position + 'px');
    space.style.setProperty('--y-position', y_position + 'px');
    astroSpin();
    touchCheck();
  }, 10);
}, 1000);

/**
item - 
배경 별 : 색, 크기, 개수, 특별한 모양
배경 obj : 우주선, 우주인, 작은 행성, 성운
obj : 사진 직접 추가로 날아다니게 , 크기

무한맵 생성하는 방법 구상
ㅁㅁㅁ
ㅁㅁㅁ
ㅁㅁㅁ
위와 같이 같은 맵을 9개 복사해서 붙이고 가운데 맵을 벗어나면 가운데 맵의 반대편으로 이동시키기

 */