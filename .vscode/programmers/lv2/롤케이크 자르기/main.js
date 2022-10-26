function solution(topping) {
    var answer = 0;
    let arr1 = new Set();
    let arr2 = new Set();
    for(let i = 0; i < topping.length; i++){
        arr1 = new Set(topping.slice(0,i));
        arr2 = new Set(topping.slice(i,topping.length));
        if(arr1.size == arr2.size) answer++;
        if(arr1.size > arr2.size) return answer;
    }
    return answer;
}