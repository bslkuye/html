function solution(maps) {
  var answer = 0;
  let pathfind = maps;
  pathfind[0][0] = -1;
  for(let a = 0; a < pathfind.length * pathfind[0].length; a++){
      for(let i = 0; i < pathfind.length; i++){
          for(let j = 0; j < pathfind[0].length; j++){
              if(pathfind[i][j] < 0){
                  if(i != pathfind.length - 1 && pathfind[i+1][j] == 1) pathfind[i+1][j] = pathfind[i][j] - 1;
                  if(i != 0 && pathfind[i-1][j] == 1) pathfind[i-1][j] = pathfind[i][j] - 1;
                  if(j != pathfind[0].length - 1 &&pathfind[i][j+1] == 1) pathfind[i][j+1] = pathfind[i][j] - 1;
                  if(j != 0 &&pathfind[i][j-1] == 1) pathfind[i][j-1] = pathfind[i][j] - 1;
              }
          }
      }
  }
  
  return pathfind[pathfind.length-1][pathfind[0].length-1] * (-1);
}
//https://school.programmers.co.kr/learn/courses/30/lessons/1844