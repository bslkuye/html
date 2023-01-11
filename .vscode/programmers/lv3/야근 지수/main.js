function solution(n, works) {
  var answer = 0;
  let arr = works.sort((a,b) => b - a);
  let map = new Map();
  for(let i = 0; i < works.length; i++){
      if(map.get(works[i]) == undefined) map.set(works[i], 0);
      map.set(works[i], map.get(works[i]) + 1);
  }
  let max = [...map.keys()].sort((a,b) => b - a)[0];
  for(let i = 0; i < n; i++){
      if(map.get(max - 1) == undefined) map.set(max - 1, 0);
      map.set(max, map.get(max) - 1);
      map.set(max - 1, map.get(max - 1) + 1);
      if(map.get(max) <= 0){
          map.delete(max);
          max--;
      }
  }
  let key = [...map.keys()];
  for(let i = 0; i < key.length; i++){
      if(key[i] <= 0) break;
      for(let j = 0; j < map.get(key[i]); j++){
          answer += key[i]**2;
      }
  }
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12927