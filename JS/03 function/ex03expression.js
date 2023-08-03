// 함수 표현식 : 익명 함수 형태로 함수 선언 -> 변수 참조
// 익명 함수 -> function(){}

const intro = function(){
    console.log('내 이름은 군순. 팀장이죠.');
}
intro();

const intro2 = function(userTeam, userName = '군순'){
    console.log(`내 이름은 ${userName}. ${userTeam}팀 비주얼을 맡은 팀장이죠.
                    ☠X100`);
}
intro2('순이네');

const intro3 = function(userName){
    return `순이네에서 귀여움을 맡은 ${userName}입니당!
                    ☠X100`
}
console.log(intro3('군순'));