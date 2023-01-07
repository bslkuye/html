function solution(n, s) {
  var answer = [];
  if(s/n < 1) return [-1];
  for(let i = 0; i < n - (s % n); i++) answer.push(parseInt(s/n));
  for(let i = 0; i < s % n; i++) answer.push(parseInt(s/n) + 1);
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12938