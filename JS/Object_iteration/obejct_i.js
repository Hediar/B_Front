// 1) object.keys()
const object1 = {
    a:'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1)); //['a', 'b', 'c']

// 단순 배열
const arr = ['a','b','c'];
console.log(Object.keys(arr)); // 0 1 2

// 배열형 객체
const obj = {0:'a', 1:'b', 2:'c'};
console.log(Object.keys(obj)); // 0 1 2 

const anObj = {100:'a', 2: 'b', 7:'c'};
console.log(Object.keys(anObj)); // 2 7 100

// 2) object.values(obj)
const object1 = {
    a:'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1)); // somestring 42 false

// 3) Object.entries(obj)
const object1 = {
    a:'somestring',
    b: 42,
    c: false
};

console.log(Object.entries(object1)); 
// Array(2),Array(2),Array(2) 내에 key와 value를 담아줌 

// 4) 배열 분해하기
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"];
let [firstName, surname] = arr; 
console.log(firstName); // Bora
console.log(surname); // Lee

let [firstName, surname] = "Bora Lee".split(' ');
// 공백을 기준으로 나눈다. 