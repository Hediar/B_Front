let message;
message = 'Hello';
console.log(message);

let admin, name;
name = 'Jhon';
admin = name;
alert(admin);

var x = 'global';
function foo () {
    var x = 'function scope';
    console.log(x);
}

foo();
console.log(x);

var x = 0;
{
    var x = 1;
    console.log(x);
}
console.log(x);

let y = 0;
{
    let y = 1;
    console.log(y);
}
console.log(y);

// 전역변수를 객체로 
let MYAPP = {};
MYAPP.student = {
    name: "Lee",
    gender: "male"
};
console.log(MYAPP.student.name);

// 즉시 실행 함수
(function () {
    let MYAPP = {};
    MYAPP.student = {
        name: "Lee",
        gender: "male"
    };
    console.log(MYAPP.student.name);
}());
console.log(MYAPP.student.name);
