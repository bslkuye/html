//https://school.programmers.co.kr/learn/courses/30/lessons/49994
function solution(dirs) {
  let x = 0;
  let y = 0;
  let a;
  let b;
  let set = new Set();
  for(let i = 0; i < dirs.length; i++){
      a = 10101010 + x * 1000000 + y * 10000;
      b = 10101010 + x * 100 + y;
      if(dirs[i] == 'U') x++;
      if(dirs[i] == 'D') x--;
      if(dirs[i] == 'R') y++;
      if(dirs[i] == 'L') y--;
      
      if(x < -5) { x++;
      }else if(x > 5) { x--;
      }else if(y < -5) { y++;
      }else if(y > 5) { y--;
      }else{
          a += x * 100 + y;
          b += x * 1000000 + y * 10000;
          set.add(a);
          set.add(b);
      }  
  }
  return set.size/2;
}