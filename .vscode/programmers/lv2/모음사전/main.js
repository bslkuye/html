//https://school.programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {
  let sum = 0;
  let str = word.replace(/A/g, '0').replace(/E/g, '1').replace(/I/g, '2').replace(/O/g, '3').replace(/U/g, '4');
  let count = [781, 156, 31, 6, 1];
  for(let i = 0; i < str.length; i++){
      sum += count[i] * str[i] + 1;
  }
  return sum;
}