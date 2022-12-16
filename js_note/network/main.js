//네트워크 요청 : 클라이언트가 서버에 데이터를 요청하거나 보내는 일련의 통신 과정
/*
fetch('URL',{
  mathod:'POST',
  headers:{
    Cookie:'',
  },
  body:{
    name:'',
  }
});
*/

fetch("./sample.json")
.then(async(result) => {
  console.log('result', result);
  if(result.ok){
    const data = await result.json();
    console.log(data);
  }
});