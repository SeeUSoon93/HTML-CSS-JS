// 1. 색상을 입력받을 입력창 만들기
// 2. 빨강 -> red, 초록 -> green, 파랑 -> blue
//    그외 -> '잘못 입력하셨습니다' (알림 팝업창)

// 배경색 바꾸는 코드는 ex02 참고

while (true) {
    let color = prompt('색상을 입력하세용~ (red🧡 / green💚 / blue💙)');

    if (color == 'red') {
        document.querySelector('body').style.backgroundColor = 'red';
        break;        
    } else if (color == 'green') {
        document.querySelector('body').style.backgroundColor = 'green';
        break;
    } else if (color == 'blue') {
        document.querySelector('body').style.backgroundColor = 'blue';
        break;
    } else {
        alert('다시 입력하세요💥');
    }    
}
