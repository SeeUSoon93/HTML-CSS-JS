// 1. 랜덤 숫자를 하나 뽑는다. (1~100)
// Math.random() : 0~1 사이의 난수 생성
// 2. 사용자에게 숫자를 입력 받는다.
//    조건에 따라 다른 팝업창 출력
//    입력숫자 > 랜덤숫자 -> '입력한 숫자보다 작은 수입니다.'
//    입력숫자 < 랜덤숫자 -> '입력한 숫자보다 큰 수입니다.'
//    입력숫자 = 랜덤숫자 -> '정답입니다. 축하합니다! 💕'

let randomNum = parseInt(Math.random()*100)+1;

while(true){
    let userNum = Number(prompt('숫자를 입력하세요'))

    if (userNum != randomNum){
        if(userNum > randomNum){
            alert('입력한 숫자보다 큰 수입니다.')
        }else{
            alert('입력한 숫자보다 작은 수입니다.')
        }
    }else{
        alert('정답입니다. 축하합니다! 💕')
    }
}