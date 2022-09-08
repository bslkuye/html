const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const runBtn = document.getElementById("run");
const paintBtn = document.getElementById("paint");
const oneMoveBtn = document.getElementById("oneMove");

canvas.width = length;
canvas.height = length;

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
}

function runBtnClick(){

}

function paintBtnClick(){

}

function oneMoveBtnClick(){

}

runBtn.addEventListener("click", runBtnClick);
paintBtn.addEventListener("click", paintBtnClick);
oneMoveBtn.addEventListener("click", oneMoveBtnClick);