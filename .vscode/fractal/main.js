const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const runBtn = document.getElementById("run");
const paintBtn = document.getElementById("paint");
const oneMoveBtn = document.getElementById("oneMove");

const COLORS = [
    '#0000FF',
    '#1111FF',
    '#2222FF',
    '#3333FF',
    '#4444FF',
    '#5555FF',
    '#6666FF',
    '#7777FF',
    '#8888FF',
    '#9999FF',
    '#AAAAFF',
    '#BBBBFF',
    '#CCCCFF',
    '#DDDDFF',
    '#EEEEFF',
    '#FFFFFF'
];

let count = 0;

canvas.width = 500;
canvas.height = 500;

function paintBoard(){
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(board[i][j] == 1){
                ctx.beginPath;
                ctx.fillStyle = "black";
                ctx.fillRect(i,j,1,1);
            }
        }
    }
}

function paintCell(x, y){
    ctx.beginPath;
    ctx.fillStyle = COLORS[Math.floor(count/700)];
    ctx.fillRect(x,y,1,1);
}

function runBtnClick(){
    paintBoard();
    count = 0;
    var interval = setInterval(() => {
        count++;
        fractalMake();
        if(count == 10000){
            clearInterval(interval);
        }
    }, 10);
}

function paintBtnClick(){
    paintBoard();
}

function oneMoveBtnClick(){
    fractalMake();
}

runBtn.addEventListener("click", runBtnClick);
paintBtn.addEventListener("click", paintBtnClick);
oneMoveBtn.addEventListener("click", oneMoveBtnClick);