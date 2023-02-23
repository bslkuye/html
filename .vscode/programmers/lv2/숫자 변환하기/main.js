function solution(x, y, n) {
  let arr = new Array(y + 1).fill(-1);
  arr[x] = 0;
  for(let i = x; i <= y; i++){
      if(arr[i] != -1){
          if(arr[i + n] == -1 || arr[i + n] > arr[i] + 1){
              arr[i + n] = arr[i] + 1;
          }
          if(arr[i * 2] == -1 || arr[i * 2] > arr[i] + 1){
              arr[i * 2] = arr[i] + 1;
          }
          if(arr[i * 3] == -1 || arr[i * 3] > arr[i] + 1){
              arr[i * 3] = arr[i] + 1;
          }
          if(arr[y] != -1) return arr[y];
      }
  }
  return arr[y];
}

https://school.programmers.co.kr/learn/courses/30/lessons/154538