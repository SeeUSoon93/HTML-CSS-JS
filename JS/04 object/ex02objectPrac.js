// 1. 포맷에 맞춰 팀원들의 정보를 채워넣기
//  객체명은 person1, person2, person3,...

let person1 = {
    name: '김군순',
    bDay: '2월 10일',
    subject: 'CSS',
    hobby: 'drink',
    favorite: '김군순'
}

let person2 = {
    name: '이대섭',
    bday: '5월 8일',
    subject: 'HTML/CSS',
    hobby: '노래',
    favorite: '축구'
}

let person3 = {
    name: '김한주',
    bday: '2월 19일',
    subject: 'JavaScript',
    hobby: '풋살',
    favorite: '치맥'
}

let person4 = {
    name: '서희주',
    bday: '9월4일',
    favSub: 'java',
    hobby: '노래방,맛집투어 ..',
    favorite: '게임'
}

let personList = [person1, person2, person3, person4]
console.log(personList)

// 2. HTML내 출력해주기
// 의 생일은 , 좋아하는 과목은 입니다.
// 취미는 이고, 좋아하는 건 입니다.

for (let person of personList) {
    document.write(`${person.name}의 생일은 ${person.bDay},
    좋아하는 과목은 ${person.subject}입니다.<br>
    취미는 ${person.hobby}이고,
    좋아하는건 ${person.favorite}입니다.<br>`)
}

