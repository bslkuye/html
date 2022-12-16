const obj = {};

let result = '';

try{
  result = obj.property.a;
}catch(error){
  result = 'none'//기본값
  console.dir(error);
}finally{
  console.log(`result = ${result}`);
}

try{
  throw new Error('custom error');
}catch(error){
  console.log(error);
}