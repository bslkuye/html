function solution(m, info) {
  info = info.map((i) =>
    i
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a")
  );
  m = m
    .replace(/C#/g, "c")
    .replace(/D#/g, "d")
    .replace(/F#/g, "f")
    .replace(/G#/g, "g")
    .replace(/A#/g, "a");
  info = info.map((i) => i.split(/,|:/));

  for (let i = 0; i < info.length; i++) {
    info[i].push(
      -(info[i].shift() * 60 + info[i].shift() * 1) +
        (info[i].shift() * 60 + info[i].shift() * 1)
    );
    info[i][1] = [...info[i][1]];
    info[i][3] = "";
    for (let j = 0; j < info[i][2]; j++) {
      info[i][3] += info[i][1][0];
      info[i][1].push(info[i][1].shift());
    }
  }

  info.sort((a, b) => b[2] - a[2]);

  for (let i = 0; i < info.length; i++) {
    if (info[i][3].includes(m)) return info[i][0];
  }

  return "(None)";
}
//https://school.programmers.co.kr/learn/courses/30/lessons/17683
