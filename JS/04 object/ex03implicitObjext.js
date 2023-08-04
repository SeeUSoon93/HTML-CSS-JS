// 내장 객체 : 자바스크립트에서 제공하는 객체
// Math, Date, Array,...

let today = new Date();
console.log('오늘 : ', today);

let yesterday = new Date(2023,7,3,0,0,0);
console.log('어제 : ', yesterday);

// 콘솔창에 출력해보기
// YY년 M월 D일 D요일
// H시 M분 S초입니다.

let tYear = today.getFullYear();
let tMonth = today.getMonth()+1;
let tDate = today.getDate();
let tDay = today.getDay();
let tHour = today.getHours();
let tMinute = today.getMinutes();
let tSecond = today.getSeconds();

// tDay(요일)0~6 ->일~토
switch(tDay){
    case 0 : tDay = '일'; break;
    case 1 : tDay = '월'; break;
    case 2 : tDay = '화'; break;
    case 3 : tDay = '수'; break;
    case 4 : tDay = '목'; break;
    case 5 : tDay = '금'; break;    
    case 6 : tDay = '토'; break;
}

console.log(`${tYear}년 ${tMonth}월 ${tDate}일 ${tDay}요일
${tHour}시 ${tMinute}분 ${tSecond}초 입니다
`)