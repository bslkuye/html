function solution(str1, str2){
    let stra = '';
    let strb = '';
    let check;
    for(let i = 0; i < str1.length-1; i++){
        check = str1.substring(i,i+2).toLowerCase();
        if(check[0] >= 'a' && check[0] <= 'z' && check[1] >= 'a' && check[1] <='z'){
            stra = stra + check + ' ';
        }
    }
    for(let i = 0; i < str2.length-1; i++){
        check = str2.substring(i,i+2).toLowerCase();
        if(check[0] >= 'a' && check[0] <= 'z' && check[1] >= 'a' && check[1] <='z'){
            strb = strb + check + ' ';
        }
    }
    if(stra.length == 0 && strb.length == 0) return 65536;
    let count = 0;

    for(let i = 0; i < stra.length; i+=3){
        check = stra.slice(i,i+2);
        if(strb.includes(check)){
            count++;
            strb = strb.replace(check,'');
        }
    }
    stra = stra.replace(/\s/g,'');
    strb = strb.replace(/\s/g,'');
    return Math.floor(count * 65536 / (stra.length/2 + strb.length/2));
}