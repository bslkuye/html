function solution(numbers) {
  var answer = [];
  for(let i = 0; i < numbers.length; i++){
      if(numbers[i].toString(2).split('').reverse().join('').indexOf('0') == 0){
          answer[i] = numbers[i] + 1;
      }else if(numbers[i].toString(2).split('').reverse().join('').indexOf('0') == -1){
          answer[i] = numbers[i] + 2 ** (numbers[i].toString(2).length - 1);
      }else{
          answer[i] = numbers[i] + 2 ** (numbers[i].toString(2).split('').reverse().join('').indexOf('0')-1);
      }
  }
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/77885