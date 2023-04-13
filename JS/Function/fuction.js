// 1. 함수
'use strict';

// 1) 함수 선언
function showMessage() {
    console.log('안녕하세요!');
}

// 매개변수 사용
function name(p1, p2) {
    // 함수 본문
}

// 호출
showMessage();


// 2) 지역 변수
function showMessage() {
    let message = "안녕하세요!";
    console.log(message);
}

showMessage();
console.log(message); // error


// 3) 외부 변수
let userName = 'Jhon';
function showMessage() {
    userName = 'Bob';
    let message = 'Hello, ' + userName;
    console.log(message);
}
showMessage(); // Hello, Bob
console.log(userName); // Bob


// 4) 매개변수
function showMessage(from, text) {
    console.log(from + ': ' + text);
}
showMessage('Ann', 'Hello!'); // Ann: Hello!


function showMessage(from, text) {
    from = '*' + from + '*';
    console.log(from + ':' + text);
}
let from = "Ann";

showMessage(from, "Hello"); // *Ann*:Hello
console.log(from);


// 5) 기본값 default value
function showMessage(from, text = "no text given") {
    console.log(from + ": " + text);
}
showMessage("Ann"); // Ann: no text given
showMessage("Ann", undefined); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
    // 해당 함수는 text값이 없을 대 호출 
    // anotherFunction()의 return값이 text의 값이 된다.
}

// 논리 연산자 활용
function showMessage(from, text) {
    text = text || 'no text given';
    // text ==""일 경우, 값이 전달되지 않은것과 같다고 간주
}


// 6) 반환 값
function sum(a,b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result);

// 여러 개의 return 문
function checkAge(age) {
    if(age >= 18) {
        return true;
    } else {
        return confirm('보호자의 동의를 받으셨나요?');
    }
}
let age = prompt('나이를 알려주세요', 18);
if (checkAge(age)) {
    console.log('접속 허용');
} else {
    console.log('접속 차단');
}

/* return문이 없거나 return지시자만 있는 경우 undefined를 반환 */


// 7) 함수 이름짓기
/* 간결하며, 한 가지 기능만 수행 가능하도록 만들어야 한다. */
function showPrimes(n) {
    for(let i = 2; i < n; i++) {
        if(!isPrime(i)) continue;
        alert(i);
    }
}
function isPrime(n) {
    for (let i =2; i<n; i++) {
        if(n % i == 0) return false;
    }
    return true;
}
