// 화살표 함수 : 함수 표현식 형태, function 키워드 대신 => 삽입


const intro = ()=>{
    console.log('내 이름은 군순. 팀장이죠.');
}
intro();

const intro2 = (userTeam, userName = '군순')=>{
    console.log(`내 이름은 ${userName}. ${userTeam}팀 비주얼을 맡은 팀장이죠.
                    ☠X100`);
}
intro2('순이네');

// const intro3 = (userName)=>{
//     return `순이네에서 귀여움을 맡은 ${userName}입니당!
//                     ☠X100`
// }

const intro3 = userName=>`순이네에서 귀여움을 맡은 ${userName}입니당!
                    ☠X100`

console.log(intro3('군순'));

// 매개변수 1개 -> () 생략 가능
//  실행문 1개 -> {}, return 생략가능