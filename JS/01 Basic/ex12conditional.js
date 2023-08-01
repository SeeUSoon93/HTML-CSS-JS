// 조건문 : 주어진 조건을 비교, 판단하여 결과를 얻는 구문

// 1. 조건(삼항)연산자 : ===
let coffeeMenu = prompt('메뉴를 입력하세요')
//  true/flase일 때 사용
coffeeMenu === '소주'
? console.log('주문하신 소주🍶 나왔습니다.')
: console.log(`${coffeeMenu} 현재 대기 시간 1시간 있습니다.`);
// 조건이 하나일 때 사용
coffeeMenu === '맥주' && console.log('나가주세요');

// 2. if문
let num = 15;
if(num>10){
    console.log('10보다 큰 수 입니다.');
}else if(num==10){
    console.log('10 입니다.');
}else{
    console.log('10보다 작은 수 입니다.');
}