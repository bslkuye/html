const A = (callback) => {
  const a = 'A함수 실행 후 생기는 데이터';

  callback(a);
};

const B = (a) => {
  console.log(`${a}를 이용하는 B`);
};

A(B);
//다른 함수에 의해 생기는 데이터를 활용하는 함수를 작성하기 위해 사용