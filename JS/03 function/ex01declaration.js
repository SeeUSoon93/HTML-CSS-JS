// 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서 필요할 때마다 사용하기 위한 구조

// 함수 선언
function intro(){
    console.log('내 이름은 군순. 팀장이죠.');
}
// 함수 호출
intro();

// 매개변수
// 기본값 설정 가능
function intro2(userTeam, userName = '군순'){
    console.log(`내 이름은 ${userName}. ${userTeam}팀 비주얼을 맡은 팀장이죠.
                    ☠X100`);
}
intro2('순이네');

// 매개변수+return문
function intro3(userName){
    return `순이네에서 귀여움을 맡은 ${userName}입니당!
                    ☠X100`
}
console.log(intro3('군순'));