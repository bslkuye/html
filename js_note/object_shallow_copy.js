const person = {
  name: 'name',
  something: '',
  talk: (sentence) =>{
    console.log(sentence);
  },
  obj: { // person의 프로퍼티를 복사해가도 obj의 값은 주소값으로 되어 있기 때문에 person과 person3 의 obj는 같은 값을 가리킨다.
    changed: false,
  }
};

const person2 = person;
person2.name = 'othername';
person.talk(`my name is ${person.name}.`); //my name is othername.

const person3 = Object.assign({}, person);
person3.name = 'person3name';

person.talk(`my name is ${person.name}.`);
person3.talk(`my name is ${person.name}.`);
