function solution(operations) {
  var answer = [];
  for(let i = 0; i < operations.length; i++){
      if(operations[i].split(' ')[0] == 'I'){
          answer.push(operations[i].split(' ')[1] * 1);;
      }else if(operations[i].split(' ')[0] == 'D' && operations[i].split(' ')[1] == '-1') answer.sort((a, b) => a - b).shift();
      else if(operations[i].split(' ')[0] == 'D' && operations[i].split(' ')[1] == '1') answer.sort((a, b) => a - b).pop();
  }
  if(answer.length == 0) return[0, 0];
  return [Math.max(...answer), Math.min(...answer)];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42628