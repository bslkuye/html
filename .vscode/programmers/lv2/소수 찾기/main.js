function solution(numbers) {
  let answer = new Set();
  
  function f(arr, str){
      for(let i = 0; i < arr.length; i++){
          let a = [...arr];
          let s = str + a.splice(i,1);
          if(isPrime(s * 1)) answer.add(s * 1);
          f(a, s);
      }
  }
  
  function isPrime(num) {
      if(num === 1 || num === 0) return false;
      if(num === 2) return true;
      for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
          if(num % i === 0)return false; 
      }
  return true; 
  }
  
  f(numbers,'');
  return answer.size;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/42839