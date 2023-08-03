// 객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터타입

/*
객체 구조
let object = {
    key1 : value1,
    key2 : value2,
    ...
}

key : 객체의 속성(property)
value : 속성의 값
*/

// 객체 생성
let person = {
    'name' : '군순이',  // key값은 따옴표를 써도 되고 안써도 됨
    age : 16,
    favorite : {
        food : '피자🍕',
        drink : '소주🍶'
    },
    team : ['이대섭','서희주','김한주']
}
console.log(person);
console.log("이름 : ",person.name)
console.log("나이 : ",person.age)
console.log("좋아하는 거 : ",person.favorite)
console.log("좋아하는 음식 : ",person.favorite.food)
console.log("팀 막내 : ",person.team[1])

// 속성값 변경 및 추가
person.name = '김군순이';
console.log("이름 : ",person.name)

// 속성에 해당하는 값을 참조
let personName = person.name;
personName = '안유진';
console.log("이름 변경 : ",person.name);




// height에 170을 추가
person.height = 190;



console.log(person)