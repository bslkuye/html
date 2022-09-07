const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const saveBtn = document.getElementById("save");
const wallSizeInput = document.getElementById("wall_size");
const blockSizeInput = document.getElementById("block_size");
const rowInput = document.getElementById("rows");

let arrlength = ROWS * BLOCK_SIZE + (ROWS+1) * WALL_SIZE;
console.log(arrlength);
canvas.width = 543;
canvas.height = 543;

function setLength(){
    arrlength = ROWS * BLOCK_SIZE + (ROWS + 1) * WALL_SIZE;
    console.log(arrlength);
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
function paintCell(x,y,row,col,color){
    ctx.beginPath();
    ctx.fillStyle = COLORS[color];
    ctx.rect(xyPosition(x), xyPosition(y), row, col);
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
    // ctx.fillStyle = "gainsboro";
    // ctx.fillRect(0,0,1000,1000);
    for(let i = 2; i < length-2; i++){
        for(let j = 2; j < length-2; j++){
            paintCell(i, j, pixelCheck(i), pixelCheck(j),board[i][j]);
            y_pixel += pixelCheck(j);
        }
        x_pixel += pixelCheck(i);
        y_pixel = 0;
    }
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
            // paintBoard();
        } else {
            board[x_position][y_position] = 2;
            paintBoard();
            clearInterval(interval);
        }
    }, 1);
}

saveBtn.addEventListener("click", onSaveClick);
