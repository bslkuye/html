const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const runBtn = document.getElementById("run");
const paintBtn = document.getElementById("paint");
const oneMoveBtn = document.getElementById("oneMove");

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
    ctx.fillStyle = "black";
    ctx.fillRect(x,y,1,1);
    console.log("paint",x,y);
}

function runBtnClick(){
    let count = 0;
    var interval = setInterval(() => {
        if (count < 1000) {
            fractalMake();
            count++;
        } else {
            clearInterval(interval);
        }
    }, 1);
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
