/**보드 만들고 가운데 고정된 점 만들고
 * 점이랑 일정거리 떨어진 곳에서 시작해서 붙이고
 * 프랙탈 차원 계산 로그스케일 그래프로 표시
 *
 * 벌집모양으로 만들어도 좋을듯
 *
 * 일단은 사각형으로
 */
let length = 1000;
let board = Array.from(Array(length), () => new Array(length).fill(0));
let x_position = 0;
let y_position = 0;
let makeGap = length/2;

board[Math.floor(length/2)][Math.floor(length/2)] = 1;

/**랜덤위치 생성 */
function randMake(){
    let Xrand = Math.floor(Math.random() * length);
    let Yrand = Math.floor(Math.random() * length);
    if(Xrand**2 + Yrand**2 < (length/2)**2 && Xrand**2 + Yrand**2 > (length/3)**2){
        x_position = Xrand;
        y_position = Yrand;
    }else{
        randMake();
    }
}

/**랜덤방향 움직이기  */
function rand4WayMove(){
    switch (Math.floor(Math.random() * 4)) {
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

/**x,y position 근처에 고정된 점이 있으면 고정하고 true return 외엔 false return */
function checkBoard(){
    let x = x_position;
    let y = y_position;
    if(board[x+1][y] == 1||board[x-1][y] == 1||board[x][y+1] == 1||board[x][y-1] == 1){
        board[x][y] = 1;
        return false;
    }
    return true;
}

function fractalMake(){
    randMake();
    while(checkBoard()){
        if(Math.random() > 0.5){
            center4WayMove();
        }else{
            rand4WayMove();
        }
    }
}