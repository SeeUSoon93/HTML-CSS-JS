// 1. 주어진 데이터를 담은 배열을 생성한다.
// 2. 반복문 안에서 최댓값을 구한다.
// 3. 형태에 맞춰서 알림팝업창으로 출력한다.

let numList = [23,54,78,13,44];
let max = numList[0];

for(let i of numList){
    if (i > max){
        max = i
    }
}
alert(`최댓값 >>${max}`)