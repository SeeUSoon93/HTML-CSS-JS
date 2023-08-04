// BOM(Browser Object Model) : 브라우저를 다루기 위한 객체
// 브라우저에 관한 정보를 제공하거나 브라우저의 모양을 제어

// window : 브라우저 객체 최상위, 브라우저 창 관련 기능
// window.open('https://soonart.tistory.com/entry/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%A8%EC%88%98', '순이 블로그',
// 'width = 500; height=500')

// location : 브라우저 주소 관련 정보
console.log(location);
console.log('현재 주소 : ',location.href);

// 페이지 이동
// location.href = 'https://soonart.tistory.com/entry/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%A8%EC%88%98'

// screen : 화면 해상도 정보(너비, 높이)
console.log(screen);

// navigator : 현재 브러우저 정보(버전, 이름, 위치 등)
console.log(navigator);

// history : 브라우저 이동 관련 기능(뒤로, 앞으로)
// 직접 브라우저에 접속에서 F12 -> console 창에 입력하면됨
// history.go(이동할 페이지 숫자)
// -2 : 뒤로 두번, 3: 앞으로 세번