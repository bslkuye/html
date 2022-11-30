//11.28

//js 함수 종류

//함수선언
function name(params){

}

//메서드
const obja = {
    func: function(){

    }
}

//생성자
function NewFunc(){

}

// //함수표현식
// const func = function(){

// }

//화살표 함수
const arrowFunc = () => {
    return ''
}
//화살표 함수와 일반 함수와 동작 방식 등이 다르다
//함수 표현식은 어디에 선언하든 실행되기 전에 선언되지만 표현식과 화살표 함수는 선언한 이후부터 사용 가능하다.
//this, argument 등이 다르게 동작한다.

//매개변수와 인자 다루기

function func(p1,p2,p3,p4){

}

func(undefined, 'p2', undefined, 'p4'); // 비효율적이다

//해결방법 : 함수 인풋으로 객체를 받으면 된다

function func(objP){
    const p1 = objP.p1
    const p2 = objP.p2
    const p3 = objP.p3
    const p4 = objP.p4
}
// 위 아레 함수가 동일
function func({p1, p2, p3, p4}){

}

const result = func({
    p2: 'p2',
    p4: 'p4',
})


//argument 객체  함수에 전다로딘 인수에 해당하는 array 형태의 객체

function func(){
    return arguments[0];
}

console.log(func(1)); // 1
//입력된 값을 array형태로 보여주지만 array는 아니다
//화살표 함수에서는 사용할 수 없다.

//array로 형변환 해서 사용
function func(){
    const convertArr = Array.from(arguments);

}

//rest parameter : argument와는 다르게 array 형태이고 다른 매개변수와 함께 사용할 수 있다
//화살표 함수에서도 사용할 수 있다.
//매개변수 이름을 정할 수 있다.

const func = (...nums) => {
    return nums;
}
const func = (first, second, ...num) => {
    return num;
}

//이벤트
/**
 * 이벤트는 클릭, 호버, 키다운 등
 */

/**
 * <button class="btn">
 */

const btnclick = document.querySelector('.btn');

btnclick.addEventListener('click', function(event){
    console.dir(event); // click
});


// 객체

//객체 생성 : 중괄호나 객체 생성자로 생성

const objb = {
    name : "name",
};

const objc = new Object();

//객체 관련 함수
delete obj.name; // 삭제

name in obj // 프로퍼티 유무

for(/**변수 in obj */;;){
    //변수를 이용한 코드
}


//객체 응용

const obj1 = {
    a:1,
    b:{
        c:2,
        d:3,
    }
}   

const obj2 = Object.assign({}, obj1);
obj2.b.c = 0;
console.log(obj1); // c가 0으로 바뀌어 있음

const deepCopy = (origin) => {
    const result = {};
    for(let key in origin){
        if(origin[key] != null && typeof origin[key] === "object"){
            result[i] = deepCopy(origin[i]);
        } else {
            result[i] = origin[i];
        }
    }
    return result;
}

const obj3 = deepCopy(obj1);
obj3.b.c = -1;
console.log(obj1); // c가 바뀌지 않음
console.log(obj3); // c가 -1로 바뀜

// 객체 응용

const person = {
    name: 'name',
    something: '',
    talk: (sentence) => {
        console.log(sentence);
    },
}

person.talk(`my name is ${person.name}.`);

person.name = 'changeName';

person.talk(`my name is ${person.name}.`);


//옵셔널 체이님 : ?. 뒤에 오는 null, undifined를 만나면 뒤에 오는 것을 무시하고 반환

console.log(person.name?.first); // name