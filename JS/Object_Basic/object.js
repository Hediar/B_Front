// 1) 객체
// 선언 방법
let user = new Object(); // 객체 생성자
let user - {}; // 객체 리터럴

// 2) 리터럴과 프로퍼티
let user = {
    name: "Jhon", // 프로퍼티 1
    age: 30 // 프로퍼티 2
};

alert(user.name); // Jhon
alert(user.age); // 30

// 프로퍼티 추가
user.isAdmin = true;
// 삭제
delete user.age;


// 3) 대괄호 표기법
let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];

let user = {
    name: "Jhon",
    age: 30
};
let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
alert(user[key]); // 점 표기로 할 경우 undefined


// 단축 프로퍼티
function makeUser(name, age) {
    return {
        name, //: name,
        age: 30,
    }
}

// 프로퍼티 이름의 제약사항
let obj = {
    for: 1,
    let: 2,
    return:3,
};


// "in" 연산자로 프로퍼티 존재 여부 확인하기
let user = {};
alert(user.noSuchProperty === undefined); // true ,프로퍼티가 없음

let user = {name: "Jhon", age: 30};
alert('age' in user); // true
alert('blabla' in user); // false


// for .. in 
/* for(key in object) {
    각 프로퍼티 key 이용하여 body 실행
} */
let user = {
    name: "Jhon",
    age: 30,
    isAdmin: true,
};

for(let key in user) { 
    console.log(key); // name age isAdmin
    console.log(user[key]); // Jhon 30 true 
}


// 객체 정렬 방식
// 정수는 자동으로 정렬, 작성순


// 4) 참조에 의한 객체 복사 (얕은 복사)
// 메모리 주소 저장함
let user = {name: "Jhon"};
let admin = user; // 참조값 복사
admin.name = 'Pete';
console.log(user.name); // 'Pete'

// 기존 객체와 같지만 독립적으로 만들려면? (깊은 복사)
let user = {name: "Jhon"};
let clone = {};

for(let key in user) {
    clone[key] = user[key];
}
clone.name = "Pete";
console.log(user.name); // Jhon

// 중첩 객체 복사 -> 프로퍼티가 다른 객체에 대한 참조 값일 경우 
let user = {
    name: "Jhon",
    sizes: {
        height: 182,
        width: 50,
    }
};

console.log(user.sizes.height); // 182


// 5) 메서드와 this
// 객체에 메서드 생성
let user = {
    name: 'Jhon',
    age: 30
};

user.sayHi = function() {
    console.log("안녕하세요!");
};

user.sayHi();

// 메서드 단축 구문
user = {
    sayHi: function() {
        console.log("Hello");
    }
};

user = {
    sayHi() {
        console.log("Hello");
    }
};

// 메서드와 this
// this는 현재 객체를 나타낸다.
let user = {
    name: "Jhon",
    age: 30,

    sayHi() {
        console.log(this.name); 
    }
};

user.sayHi(); // Jhon

// 자유로운 this
// 런타임에 값이 결정된다.

let user = { name: "Jhon" };
let admin = { name: "Admin"};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // Jhon
admin.f(); // Admin

admin['f'](); // Admin

// 객체 호출하기 
function sayHi() {
    alert(this);
}
sayHi(); // undefined

// this가 없는 화살표 함수
let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // 보라 

/* JS에서의 this는 런타임에 결정되며 함수를 하나만 만들어 여러 객체에서 재사용할 수 있지만,
실수로 이어질 수 있다. */


// 6) new 연산자와 생성자 함수
/* 함수 이름의 첫 글자는 대문자로 시작
    반드시 new 연산자를 붙여 실행 */
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User('보라');

console.log(user.name); // 보라
console.log(user.isAdmin); // false
// 동작방식
/* 1. 빈 객체를 만들어 this에 할당한다.
    2. 함수 본문을 실행한다. this에 새로운 프로퍼티를 추가해 this를 수정한다.
    3. this를 반환한다. */

// 생성자와 return 문
function BigUser() {
    this.name = "원숭이";
    return { name: "고릴라"}; // this가 아닌 새로운 객체 반환
}
console.log(new BigUser().name); // 고릴라 
// 괄호 생략가능

// 생성자 내 메서드
function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log("제 이름은 " + this.name + "입니다.");
    };
}
let bora = new User("이보라");

bora.sayHi();
