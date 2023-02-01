function solution(n) {
  var answer = [];
  let arr = new Array(n).fill(0).map((_, idx) => new Array(idx + 1).fill(0));
  let count = 1;
  let x = -1;
  let y = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = count++;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = count++;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = count++;
    n -= 3;
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/68645
