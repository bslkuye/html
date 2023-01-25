function solution(arr) {
  var answer = [0, 0];

  function rec(x, y, leng) {
    let sum = 0;
    for (let i = 0; i < leng; i++) {
      for (let j = 0; j < leng; j++) {
        sum += arr[i + x][j + y];
      }
    }
    if (sum == 0) {
      answer[0]++;
    } else if (sum == leng ** 2) {
      answer[1]++;
    } else {
      rec(x, y, leng / 2);
      rec(x + leng / 2, y, leng / 2);
      rec(x, y + leng / 2, leng / 2);
      rec(x + leng / 2, y + leng / 2, leng / 2);
    }
  }
  rec(0, 0, arr.length);
  return answer;
}
