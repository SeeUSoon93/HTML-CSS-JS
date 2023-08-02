// 배열에 저장된 데이터를 반복문으로 출력하기

// 1. for문
let nameList = ['✨핵심팀장✨김군순', '이대섭', '김한주', '서희주']
for(let i = 0; i<nameList.length;i++){
    console.log(nameList[i]);
}
console.log('===============');

// 2. for-of문
let sojuList = ['진로','잎새주','참이슬']
for(let i of sojuList){
    console.log(i);
}
console.log('===============');

// 3. forEach문
// 리스트명.forEach((데이터 값, 인덱스)=>{})

let coffeeList = ['아메리카노', '카페라떼','소주(순이)']
coffeeList.forEach((element, index)=>{
    console.log(index, element,);
})