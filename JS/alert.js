// let name = 'John';
// admin = name;
// alert(admin)

// let ourPlant
// let curUserName

// let apples = "2";
// let oranges = "5";
// alert(apples + oranges);
// alert(+apples + +oranges);

// let a = "1";
// let b = "2";
// alert(a+b);

let result;
if (a + b < 4) {
    result = '미만';
} else {
    result = '이상';
}
// let result = (a + b < 4) ? '미만' : '이상';

let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}

// let message = (login == '직원') ? '안녕하세요' :
// (login == '임원') ? '환영합니다.' :
// (login == '') ? '로그인이 필요합니다.' :
// '';

let name1 = 'Jhon';

function showMessage(매개변수1, 매개변수2) {
  let message = "안녕하세요!";

	alert(message);
	alert(`저는 ${매개변수1} 입니다.`);
  console.log(매개변수2);
}

showMessage(name1, '이름2');

// 안녕하세요!
// 저는 Jhon 입니다.

function sMessage(n1, n2 = "nothing"){
  console.log(n1 + ":" + n2);
}

sMessage("Ann");

function sum(a,b) {
  return a+b;
}

let re = sum(3,5);
console.log(re);

function checkAge(age) {
  return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  () => { alert("동의하셨습니다."); },
  () => { alert("취소 버튼을 누르셨습니다."); }
);

function sumAll(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,4,5,6));

let user = {
  name: "Jhon",
  age: 30
};
console.log(user.name);
console.log(user.age); 
user.isAdmin = true;
console.log(user);
delete user.isAdmin;
console.log(user);


let user = {
  name: "Jhon",
  age: 30
};

let key = prompt("사용자의 정보는?", "name");
alert(user[key]);

let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {
  [fruit]: 5,
};
alert(bag.apple);
console.log(bag);

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("Jhon", 30);
console.log(user.name);

let user = {
  name: 'Jhon',
  age: 30,
  isAdmin: true
};

for (let key in user){
  console.log(key);
  console.log(user[key]);
}

let user = {};
user.name = 'Jhon';
user.subname = 'Smith';
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
  sum += salaries[key];
}
console.log(sum);


function multiplyNumeric(obj) {
  for(let key in obj) {
    if(typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
  }
}
// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

let user = {
  name: "Jhon",
  age: 30,

  sayHi() {
    console.log(this.name);
  }
}

user.sayHi();

let user = {name: "Jhon"};
let admin = {name: "Admin"};

function sayHi(){
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;
console.log(user);

user.f(); // Jhon
admin.f(); // Admin

admin['f'](); // Admin

// 계산기 만들기
let calculator = {
  mul() {
    return this.a * this.b
  },
  sum() {
    return this.a + this.b;
  },
  read() {
    this.a = +prompt('1 값', 0);
    this.b = +prompt('2값', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 객체를 이용하여 계산기 만들기
// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('1 값', 0);
//     this.b = +prompt('2 값', 0);
//   };
//   this.sum = function() {
//     return this.a + this.b;
//   };
//   this.mul = function() {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();

// console.log("Sum = " + calculator.sum());
// console.log("Mul = " + calculator.mul());

// // 누산기 만들기
// function Accumulator(svalue) {
//   this.value = svalue;
//   this.read = function() {
//     this.value += +prompt('값을 입력해주세요.',0);
//   };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// console.log(accumulator.value);

// //배열과 반복문
// let arr = [1,2,3];
// for(let i = 0; i< arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = [1,2,3];
// for(let i of arr){
//   console.log(arr[i]);
// }

// // concat
// let arr = [1, 2];
// console.log(arr.concat([3,4]));
// console.log(arr.concat([3,4], [5,6]));
// console.log(arr.concat([3,4], 5, 6));