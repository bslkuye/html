let length = ROWS*2+1;
let board = Array.from(Array(length), () => new Array(length).fill(0));
let x_position = 0;
let y_position = 0;

//가지 않은 길  0, 한번 간 길 1, 두번 간 길2, 벽 3
//벽을 뚫는다는 생각으로 가야할듯
//포인트 위치를 1 늘리고 주변 보드 값과 벽의 상태에 따라 움직여야할듯
//외곽 벽 2중으로 쳐야 편할듯


function rand(num) {
    let rand_num = Math.floor(Math.random() * num);
    return rand_num;
}

/*보드 초기화*/
function boardReset() {
    board = Array.from(Array(length), () => new Array(length).fill(0));
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i == 0 || j == 0 || i == length - 1 || j == length - 1) {
                board[i][j] = 3;
            } else if (i % 2 == 0 || j % 2 == 0) {
                board[i][j] = 3;
            }
            if(i == 1 || j == 1 || i == length - 2 || j == length - 2){
                board[i][j] = 3;
            }
        }
    }
    paintBoard();
}

/**보드 위 랜덤한 위치에서 maker시작 */
function rand_start(){
    const a = rand(length-4);
    const b = rand(length-4);
    if(a%2 == 1 && b%2 == 1){
        x_position = a+2;
        y_position = b+2;
        board[x_position][y_position] = 1;
    }else{
        rand_start();
    }
}


/**array 바깥으로 나가지 않게 */
function check_board(a, b){
    let value = 0;
    if(board[a+2][b] == 0 || board[a-2][b] == 0 || board[a][b+2] == 0 || board[a][b-2] == 0){
        value = 1;
    }else if(board[a+2][b] == 1 || board[a-2][b] == 1 || board[a][b+2] == 1 || board[a][b-2] == 1){
        value = 2;
    }
    return value;
}

/**미로 maker */
function start_making(){
    x = x_position;
    y = y_position;
    switch (rand(4)) {
        case 0:
            if (check_board(x, y) == 1 && board[x + 2][y] == 0 && x != length - 2) {
                board[x + 1][y] = 1;
                board[x + 2][y] = 1;
                paintCell(x+1,y,pixelCheck(x+1),pixelCheck(y),board[x+1][y]);
                paintCell(x+2,y,pixelCheck(x+2),pixelCheck(y),board[x+2][y]);
                x_position = x + 2;
            } else if (check_board(x, y) == 2 && board[x + 2][y] == 1 && board[x + 1][y] == 1 && x != length - 2) {
                board[x + 1][y] = 2;
                board[x][y] = 2;
                paintCell(x+1,y,pixelCheck(x+1),pixelCheck(y),board[x+1][y]);
                paintCell(x,y,pixelCheck(x),pixelCheck(y),board[x][y]);
                x_position = x + 2;
            }
            break;
        case 1:
            if (check_board(x, y) == 1 && board[x - 2][y] == 0 && x != 1) {
                board[x - 1][y] = 1;
                board[x - 2][y] = 1;
                paintCell(x-1,y,pixelCheck(x-1),pixelCheck(y),board[x-1][y]);
                paintCell(x-2,y,pixelCheck(x-2),pixelCheck(y),board[x-2][y]);
                x_position = x - 2;
            } else if (check_board(x, y) == 2 && board[x - 2][y] == 1 && board[x - 1][y] == 1 && x != 1) {
                board[x - 1][y] = 2;
                board[x][y] = 2;
                paintCell(x-1,y,pixelCheck(x-1),pixelCheck(y),board[x-1][y]);
                paintCell(x,y,pixelCheck(x),pixelCheck(y),board[x][y]);
                x_position = x - 2;
            }
            break;
        case 2:
            if (check_board(x, y) == 1 && board[x][y + 2] == 0 && y != length - 2) {
                board[x][y + 1] = 1;
                board[x][y + 2] = 1;
                paintCell(x,y+1,pixelCheck(x),pixelCheck(y+1),board[x][y+1]);
                paintCell(x,y+2,pixelCheck(x),pixelCheck(y+2),board[x][y+2]);
                y_position = y + 2;
            } else if (check_board(x, y) == 2 && board[x][y + 2] == 1 && board[x][y + 1] == 1 && y != length - 2) {
                board[x][y + 1] = 2;
                board[x][y] = 2;
                paintCell(x,y+1,pixelCheck(x),pixelCheck(y+1),board[x][y+1]);
                paintCell(x,y,pixelCheck(x),pixelCheck(y),board[x][y]);
                y_position = y + 2;
            }
            break;
        case 3:
            if (check_board(x, y) == 1 && board[x][y - 2] == 0 && y != 1) {
                board[x][y - 1] = 1;
                board[x][y - 2] = 1;
                paintCell(x,y-1,pixelCheck(x),pixelCheck(y-1),board[x][y-1]);
                paintCell(x,y-2,pixelCheck(x),pixelCheck(y-2),board[x][y-2]);
                y_position = y - 2;
            } else if (check_board(x, y) == 2 && board[x][y - 2] == 1 && board[x][y - 1] == 1 && y != 1) {
                board[x][y - 1] = 2;
                board[x][y] = 2;
                paintCell(x,y-1,pixelCheck(x),pixelCheck(y-1),board[x][y-1]);
                paintCell(x,y,pixelCheck(x),pixelCheck(y),board[x][y]);
                y_position = y - 2;
            }
            break;
        }
        // paintBoard();

}


