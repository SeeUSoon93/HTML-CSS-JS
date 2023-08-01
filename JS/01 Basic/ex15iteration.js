// 반복문 : 어떤 조건을 만족할 때까지 같은 처리를 반복하여 실행하는 구문

// 1. while문
let num1 = 0;
console.log('1.while문');
while(num1<3){
    console.log(num1);
    num1++;
}

console.log('1-2.while문 (조건 true');
let num2 = 0;

while(true){
    console.log(num2);
    num2++;
    if(num2===3){
        break;
    }
}

// 2. do-while문
let num3 = 0;
console.log('2. do-while문');
do{
    console.log(num3);
    num3++;
}while(num3<3)

// while문과 do-while문 비교
let num4 = 0;

while(num4<0){
    console.log('while문',num4);
}
do {
    console.log('while문',num4);
}while(num4<0)

// 3. for문
console.log('3. for문');
for(let num5=0; num5<10;num5++){
    console.log(num5);
}