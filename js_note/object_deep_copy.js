const obj = {
  prop1 : '1',
  prop2 : {
    subprop1 : '2-1',
    subprop2 : '2-2',
  },
};


const deepCopy = (origin) => {
  const result = {};

  for(let i in origin){
    if(origin[i] != null && typeof origin[i] === 'object'){
      result[i] = deepCopy(origin[i]);
    }else{
      result[i] = origin[i];
    }
  }
  return result;
}

const obj1 = deepCopy(obj);

obj1.prop2.subprop1 = 'new 2-1';

console.log(obj);
console.log(obj1);