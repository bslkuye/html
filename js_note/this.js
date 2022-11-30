const products = {
  date: new Date('2022-07-16'),
  names: ['가지', '오이', '파프리카'],
  buyAll: function () {
    //this = products
    const buy = (name) => {//화살표 함수
      //this 가 없기 때문에 products를 가리킴
      console.log(`${this.date}에 ${name}를 구매합니다.`);
    }

    const buy2 = function(name){ //함수 표현식 기본
      //this가 있어서 products를 가져오지 못함.
      console.log(`${this.date}에 ${name}를 구매합니다.`);
    }.bind(this); //bind를 통해 this를 가져올 수 있게 함.

    this.names.forEach((name) => {
      buy(name);
      buy2(name);//bind를 사용하지 않으면 this 를 가져오지 못해서 undifined
    })
  }
}

products.buyAll();

