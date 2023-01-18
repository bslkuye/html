function solution(k, dungeons) {
  var answer = -1;
  function dungeon(k, a, count){
      for(let i = 0; i < a.length; i++){
          let arr = [...a];
          if(arr[i][0] <= k){
              arr.splice(i, 1);
              dungeon(k - a[i][1], arr, count + 1);
          }
      }        
      answer = answer < count ? count : answer;
  }
  dungeon(k, dungeons, 0);
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/87946