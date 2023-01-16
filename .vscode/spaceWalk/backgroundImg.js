const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const leng = 3000;

let x_position = 0;
let y_position = 0;

canvas.width = leng;
canvas.height = leng;

/**x,y = 사각형 위치 row = 가로길이 col = 세로길이 color = 색(color Array 에서 string형태로 가져옴) */
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
  // console.log('paint star');
}, 10);

setTimeout(() => {
  clearTimeout(makeStar);
  // setInterval(() => {
  //   x_position--;
  //   y_position--;
  //   canvas.style.setProperty('--x-position', x_position + 'px');
  //   canvas.style.setProperty('--y-position', y_position + 'px');
  // }, 10);
}, 10000);




