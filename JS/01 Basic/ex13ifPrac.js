// 1. 사용자로부터 키와 몸무게를 입력 받는다.
// 2. 입력 받아온 키와 몸무게를 바탕으로
//    적정 몸무게 및 사용자 몸무게와의 차이를 구한다.
// 3. 조건에 따라 초과/미달/정상 값을 구한다.
// 4. 형태에 맞춰 HTML문서내에 출력해준다.
/*
신장 : XXXcm
체중 : XXkg
적정 체중 : (XXX-100)X0.9=XXkg
결과 : 적정 체중은 XXkg이며, 현재 적정 체중에서 Xkg
       초과인/미달인/정상인 것을 알 수 있습니다.
*/

let tall = Number(prompt('키를 입력하세요'));
let weight = Number(prompt('몸무게를 입력하세요'));

let corWei = (tall-100)*0.9;

// Math.abs(값) : 절댓값 구하기
// 값.to.Fixed(자리수) : 소수점 자리수 제한

if (weight > corWei) {
    devWei = weight-corWei;
}else {
    devWei = corWei-weight;
}

document.write(`신장 : ${tall}cm<br>
체중 : ${weight}kg<br>
적정 체중 : (${tall}-100)X0.9=${corWei}(kg)<br>
결과 : 적정 체중은 ${corWei}이며, 현재 적정 체중에서 ${devWei}kg 초과한 것을 알 수 있습니다.`);