function solution(p) {
  if (p == "") return "";
  let a = [...p];
  let b = [];
  let count = 0;
  while (a.length) {
    count += a[0] == "(" ? 1 : -1;
    b.push(a.shift());
    if (count == 0) break;
  }
  count = 0;
  for (let i = 0; i < b.length; i++) {
    count += b[i] == "(" ? 1 : -1;
    if (count < 0) break;
  }
  if (count == 0) {
    return [...b].join("") + solution(a);
  } else {
    b.shift();
    b.pop();
    b = b.map((x) => (x == "(" ? ")" : "("));
    return "(" + solution(a) + ")" + b.join("");
  }
}
//https://school.programmers.co.kr/learn/courses/30/lessons/60058
