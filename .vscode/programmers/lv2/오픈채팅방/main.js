function solution(record) {
  var answer = [];
  let map = new Map();
  for(let i = 0; i < record.length; i++){
      if(record[i].split(' ')[0] != 'Leave') map.set(record[i].split(' ')[1], record[i].split(' ')[2]);
  }
  for(let i = 0; i < record.length; i++){
      if(record[i].split(' ')[0] == 'Enter'){
          answer[answer.length] = map.get(record[i].split(' ')[1]) + '님이 들어왔습니다.';
      }
      if(record[i].split(' ')[0] == 'Leave'){
          answer[answer.length] = map.get(record[i].split(' ')[1]) + '님이 나갔습니다.';
      }
  }
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/42888