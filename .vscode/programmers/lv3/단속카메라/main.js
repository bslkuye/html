function solution(routes) {
  var answer = 1;
  let arr = routes.sort((a, b) => a[0] - b[0]);
  
  let out = arr[0][1];
  for(let i = 1; i < arr.length; i++){
      if(out < arr[i][0]){
          answer++;
          out = arr[i][1];
      }
      if(out > arr[i][1]){
          out = arr[i][1]
      }
  }
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/42884