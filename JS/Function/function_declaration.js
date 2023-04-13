// 함수 선언문
function sayHi() {
    console.log('Hello');
}

// 함수 표현식
let sayHi = function() {
    console.log('Hello');
};

/* 함수 표현식은 변수처럼 할당 가능하다! 
괄호가 있어야만 함수가 호출된다.
값 처럼 다른 변수에 할당 가능하다. 
*/

// 값 복사
function sayHi() {
    console.log('Hello');
}
let func = sayHi;

func(); // Hello
sayHi(); // Hello

// 콜백 함수 
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    console.log('동의하셨습니다.');
}

function showCancel() {
    console.log('취소 버튼을 누르셨습니다.');
}

ask('동의하십니까?', showOk, showCancel);
/* 함수 ask의 인수, showOk와 showCancel -> 콜백함수!! */

