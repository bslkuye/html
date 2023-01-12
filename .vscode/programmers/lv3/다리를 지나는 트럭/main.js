function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let sum = 0;
  let bridge = Array.from({length: bridge_length}, () => 0);
  while(truck_weights.length > 0){
      sum -= bridge.shift();
      if(sum + truck_weights[0] <= weight){
          sum += truck_weights[0];
          bridge.push(truck_weights.shift());
      }else{
          bridge.push(0);
      }        
  }
  while(sum > 0){
      answer++;
      sum -= bridge.shift();
      bridge.push(0);
  }
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42583