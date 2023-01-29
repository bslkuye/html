function solution(n) {
  let b = n.toString(3);

  while (b.includes("0")) {
    b = b.replace("10", "04");
    b = b.replace("20", "14");
    b = b.replace("40", "24");
    if (b[0] == "0") b = b.substr(1);
  }

  return b;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12899
