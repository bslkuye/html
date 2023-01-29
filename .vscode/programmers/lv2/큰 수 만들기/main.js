function solution(number, k) {
  let a = number.split("");

  for (let i = 0; i < a.length; i++) {
    while (a[i] < a[i + 1]) {
      a.splice(i, 1);
      k--;
      i--;
      if (k == 0) return a.join("");
    }
  }

  // let str = '';
  // while(a.length){
  //     if(a.length != 1){
  //         if(a[0] < a[1]){
  //             a.shift();
  //             k--;
  //         }else{
  //             str += a.shift();
  //         }
  //     }else{
  //         str += a.shift();
  //     }
  // }

  for (let i = 0; i < k; i++) {
    a.pop();
  }
  // console.log(str)
  return a.join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42883
