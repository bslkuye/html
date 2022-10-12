const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const saveBtn = document.getElementById("save");
const wallSizeInput = document.getElementById("wall_size");
const blockSizeInput = document.getElementById("block_size");
const rowInput = document.getElementById("rows");

let arrlength = ROWS * BLOCK_SIZE + (ROWS+1) * WALL_SIZE;
// console.log(arrlength);
canvas.width = 540;
canvas.height = 540;

function setLength(){
    arrlength = ROWS * BLOCK_SIZE + (ROWS + 1) * WALL_SIZE;
    // console.log(arrlength);
    canvas.width = arrlength;
    canvas.height = arrlength;
    paintBoard();
}

wallSizeInput.addEventListener("change", wallChange);
blockSizeInput.addEventListener("change", blockChange);
rowInput.addEventListener("change", rowChange);

function rowChange(event){
    ROWS = Number(event.target.value);
    boardReset();   
    setLength();
}

function blockChange(event){
    BLOCK_SIZE = Number(event.target.value);
    boardReset();
    setLength();
}

function wallChange(event){
    WALL_SIZE = Number(event.target.value);
    boardReset();
    setLength();
}

/**x,y = 사각형 위치 row = 가로길이 col = 세로길이 color = 색(color Array 에서 string형태로 가져옴) */
function paintCell(x,y,color){
    ctx.beginPath();
    ctx.fillStyle = COLORS[color];
    ctx.rect(xyPosition(x), xyPosition(y), pixelCheck(x), pixelCheck(y));
    ctx.fill();
}

function onSaveClick(){
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "maze.png";
    a.click();
}

function xyPosition(a){
    return parseInt((a-1)/2) * (WALL_SIZE + BLOCK_SIZE) + ((a-1)%2) * BLOCK_SIZE;
}

function paintBoard(){
    let x_pixel = 0;
    let y_pixel = 0;
    for(let i = 2; i < length-2; i++){
        for(let j = 2; j < length-2; j++){
            paintCell(i, j,board[i][j]);
            y_pixel += pixelCheck(j);
        }
        x_pixel += pixelCheck(i);
        y_pixel = 0;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
const moveCnt = document.getElementById("score");
let moveCheck = false;
let move_x = 3;
let move_y = 3;
let moveCount = 0;
let strcount = String(moveCount);
// 키보드가 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 true 
function keyDownHandler(e) {
	if(e.key == 37 || e.key == "ArrowRight") {
        if(board[move_x+1][move_y] == 2){
            paintCell(move_x, move_y, 6);
            paintCell(move_x + 1, move_y, 6);
            paintCell(move_x + 2, move_y, 7);
            move_x += 2;
            moveCount++;
            moveCnt.innerText = `score ${moveCount}`;
        }
        
    }
	else if(e.key == 39 || e.key == "ArrowLeft") {
        if(board[move_x-1][move_y] == 2){
            paintCell(move_x, move_y, 6);
            paintCell(move_x - 1, move_y, 6);
            paintCell(move_x - 2, move_y, 7);
            move_x -= 2;
            moveCount++;
            moveCnt.innerText = `score ${moveCount}`;
        }
    }
    else if (e.key == 38 || e.key == "ArrowUp") {
        if (board[move_x][move_y-1] == 2) {
            paintCell(move_x, move_y, 6);
            paintCell(move_x, move_y - 1, 6);
            paintCell(move_x, move_y - 2, 7);
            move_y -= 2;
            moveCount++;
            moveCnt.innerText = `score ${moveCount}`;
        }
    }
    else if (e.key == 40 || e.key == "ArrowDown") {
        if (board[move_x][move_y+1] == 2) {
            paintCell(move_x, move_y, 6);
            paintCell(move_x, move_y + 1, 6);
            paintCell(move_x, move_y + 2, 7);
            move_y += 2;
            moveCount++;
            moveCnt.innerText =`score ${moveCount}`;
        }
    }
}

function wallPaint(){
    board[2][2] = 4;
    board[2][4] = 5;
    let wallPaintCheck = true;

    var wallPaintingInterval = setInterval(() => {
        if (wallPaintCheck) {
            wallPaintCheck = false;
            for (let i = 2; i < length-2; i++) {
                for (let j = 2; j < length-2; j++) {
                    if (board[i][j] == 3) {
                        if (board[i + 1][j] == 4 || board[i - 1][j] == 4 || board[i][j + 1] == 4 || board[i][j - 1] == 4) {
                            board[i][j] = 4;
                            wallPaintCheck = true;
                        }
                        if (board[i + 1][j] == 5 || board[i - 1][j] == 5 || board[i][j + 1] == 5 || board[i][j - 1] == 5) {
                            board[i][j] = 5;
                            wallPaintCheck = true;
                        }
                    }
                }
            }
            paintBoard();
        } else {
            paintBoard();
            clearInterval(wallPaintingInterval);
        }
    }, 1);

    
}

function pixelCheck(a){
    if(a == 0 || a == length-1){
        return WALL_SIZE;
    }else if(a%2 == 0){
        return WALL_SIZE;
    }else{
        return BLOCK_SIZE
    }
    return 0;
}
boardReset();
paintBoard();
function mazemake(){
    boardReset();
    rand_start();
    var interval = setInterval(() => {
        if (check_board(x_position, y_position) != 0) {
            start_making();
        } else {
            board[x_position][y_position] = 2;
            board[2][3] = 2;
            board[length-3][length-4] = 2;
            paintBoard();
            clearInterval(interval);
        }
    }, 1);
}

saveBtn.addEventListener("click", onSaveClick);
