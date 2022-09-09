/**보드 만들고 가운데 고정된 점 만들고
 * 점이랑 일정거리 떨어진 곳에서 시작해서 붙이고
 * 프랙탈 차원 계산 로그스케일 그래프로 표시
 *
 * 벌집모양으로 만들어도 좋을듯
 *
 * 일단은 사각형으로
 */
let length = 500*1;
let board = Array.from(Array(length), () => new Array(length).fill(0));
let x_position = 0;
let y_position = 0;

board[Math.floor(length/2)][Math.floor(length/2)] = 1;
paintBoard();
function randNum(num){
    return Math.floor(Math.random() * num);
}

/**랜덤위치 생성 */
function randMake(){
    let Xrand = randNum(length);
    let Yrand = randNum(length);
    if((Xrand-(length/2))**2 + (Yrand-(length/2))**2 < (length/2)**2 && (Xrand-(length/2))**2 + (Yrand-(length/2))**2 > (length/3)**2){
        x_position = Xrand;
        y_position = Yrand;
    }else{
        randMake();
    }
}

/**랜덤방향 움직이기  */
function rand4WayMove(){
    switch (randNum(4)) {
        case 0:
            x_position++;
            break;
        case 1:
            x_position--;
            break;
        case 2:
            y_position++;
            break;
        case 3:
            y_position--;
            break;
        }
}

/**가운데로 움직이기 삼각함수 이용 */
function center4WayMove(){
    let xmove = 0;
    let ymove = 0;
    if(x_position > length/2){
        xmove = -1;
    }else{
        xmove = +1;
    }
    if(y_position > length/2){
        ymove = -1;
    }else{
        ymove = +1;
    }
    
    const waycheck = Math.abs(x_position - length/2)/(Math.abs(x_position - length/2) + Math.abs(y_position - length/2));
    if(waycheck > Math.random()){
        y_position += ymove;
    }else{
        x_position += xmove;
    }

}

function blockBorder(){
    if(x_position <= 1){
        x_position++;
    }
    if(x_position >= length-2){
        x_position--
    }
    if(y_position <= 0){
        y_position++;
    }
    if(y_position >= length-2){
        y_position--;
    }
}

/**x,y position 근처에 고정된 점이 있으면 고정하고 true return 외엔 false return */
function checkBoard(){
    if(board[x_position+1][y_position] == 1 || board[x_position-1][y_position] == 1 || 
        board[x_position][y_position+1] == 1 || board[x_position][y_position-1] == 1){
        board[x_position][y_position] = 1;
        paintCell(x_position,y_position);
        return false;
    }
    return true;
}

function fractalMake(){
    randMake();
    let movecount = 0;
    while(checkBoard()){
        blockBorder();
        movecount++;
        rand4WayMove();
    }
}