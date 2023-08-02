// 배열에 데이터를 추가하거나 삭제하는 관련 함수

let soonsTeam = ['⚜군순⚜', '대섭', '한주', '희주']
console.log('순이네',soonsTeam);

// 1. 마지막 인덱스 데이터 추가 : push(value);
soonsTeam.push('훈종💨')
console.log('추가',soonsTeam);

// 2. 마지막 인덱스 데이터 삭제 : pop(value);
soonsTeam.pop()
console.log('훈종 퇴출💦',soonsTeam);

// 3. 첫번째 인덱스 데이터 추가 : unshift(value);
soonsTeam.unshift('천재 윤석')
console.log('팀 교체💦',soonsTeam);

// 4. 첫번째 인덱스 데이터 삭제 : unshift(value);
soonsTeam.shift()
console.log('팀 수복✨',soonsTeam);

// 5. 원하는 위치에 데이터 추가 또는 삭제 : splice()
//    : splice(start, deleteCount, items)
// 5-1. 추가
soonsTeam.splice(1,0,'수완','광민','윤','동민')
console.log('팀 영입✨',soonsTeam);
// 5-2. 삭제
soonsTeam.splice(0,1);
console.log('반란💥',soonsTeam);
// 5-3. 추가+삭제
/*
수완 삭제, 윤석 다희 창용 준영 추가
*/
soonsTeam.splice(0,1,'천재 윤석','다희','창용','준영');
console.log('절반 통합',soonsTeam);