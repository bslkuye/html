function solution(ex) {
  let answer = 0;
  let num = ex.split(/-|\+|\*/g);
  let opr = ex.split(/[0-9]/).filter((element) => element !== "");
  let oprArr = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];
  console.log(num, opr);
  function operator(op) {
    for (let i = 0; i < opr.length; i++) {
      if (op == opr[i]) {
        num[i + 1] = eval(num[i] + opr[i] + num[i + 1]);
        num[i] = "";
        opr[i] = "";
      }
    }
    opr = opr.filter((element) => element !== "");
    num = num.filter((element) => element !== "");
  }

  for (let i = 0; i < 6; i++) {
    num = ex.split(/-|\+|\*/g);
    opr = ex.split(/[0-9]/).filter((element) => element !== "");
    for (let j = 0; j < 3; j++) {
      operator(oprArr[i][j]);
    }
    if (answer < Math.abs(num[0])) answer = Math.abs(num[0]);
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/67257
