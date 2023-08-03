// 1. 두 개의 숫자를 입력 받는다.
// 2. 입력 받은 숫자를 파라미터로 받아
//    합을 구하는 함수를 생성한다.
// 2-1. 함수 선언문 - addNumber1
// 2-2. 함수 표현식 - addNumber2
// 2-3. 화살표 함수 - addNumber3
// 3. 콘솔창으로 결과를 확인한다.

let num1 = Number(prompt('첫 번째 정수 입력'));
let num2 = Number(prompt('두 번째 정수 입력'));

function addNumber1(a,b){
    return a+b;
}

const addNumber2 = function(a,b){
    return a+b;
}

const addNumber3=(a,b)=>a+b;

console.log('함수 선언문 : ',addNumber1(num1,num2));
console.log('함수 표현식 : ',addNumber2(num1,num2));
console.log('화살표 함수 : ',addNumber3(num1,num2));