let num = '02.10'
console.log(num);

// 1. 문자 -> 실수 : parseFloat(val)
console.log('문자 -> 실수',parseFloat(num));

// 2. 문자 -> 정수 : parseInt(val)
console.log('문자 -> 정수',parseInt(num));

// 3. 문자 -> 숫자 : Number(val)
let num2 = '1993';
console.log('문자 -> 숫자',Number(num2));

// 4. 숫자 -> 문자 : String()
let num3 = 19930210;
console.log('숫자 -> 문자', String(num3));