// 1. 화살표 함수
/* 작성 코드를 축약가능하게 만들어줌 */
let func = (arg1, arg2, ...argN) => expresstion

let func = function(arg1, arg2, ...argN) {
    return expresstion;
};

let age = prompt("나이를 알려주세요.", 18);
let welcome = (age < 18) ?
    () => alert('안녕'):
    () => alert('안녕하세요!');
welcome();

// 본문이 여러 줄인 화살표 함수
let sum = (a,b) => {
    let result = a + b;
    return result;
};
alert(sum(1,2));

// 2. 나머지 매개변수와 스프레드 문법

// 1) 나머지 매개변수
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
alert(sumAll(1)); // 1
alert(sumAll(1,2,3)); // 6


// 2) arguments 객체
function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName("Bora", "Lee"); // 2 Bora Lee

showName("Bora"); // 1 Bora

// 3) 스프레드 문법 spread syntax, 전개문법
/* 배열을 통째로 매개변수에 넘겨주기 */
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2)); // 8
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25


// 4) 배열과 객체의 복사본 만들기


