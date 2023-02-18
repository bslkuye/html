function solution(queue1, queue2) {
  var answer = 0;
  const reducer = (accumulator, curr) => accumulator + curr;
  let arr = [...queue1, ...queue2];
  let summ = arr.reduce(reducer);
  if (summ % 2 != 0) return -1;
  summ = summ / 2;
  let sum = queue1.reduce(reducer);
  let leng = queue1.length * 3;
  let a = 0;
  let b = queue1.length;

  for (let i = 0; i <= arr.length + 2; i++) {
    if (sum > summ && b == arr.length) return -1;
    if (sum == summ) {
      return i;
    } else if (sum < summ) {
      sum += arr[b++];
    } else if (sum > summ) {
      sum -= arr[a++];
    }
  }

  return -1;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/118667
