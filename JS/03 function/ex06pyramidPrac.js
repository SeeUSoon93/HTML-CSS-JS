let emoticon = prompt('이모티콘을 입력하세요');
let cnt = Number(prompt('출력할 행의 개수를 입력하세요'));

function pyramid1(a, b){
    let emot = "";
    for (let i = 0; i < b; i++) {
        emot += a;
        document.write(`${emot} <br>`);
    }
}

const pyramid2 = function(a, b){
    let emot = "";
    for (let i = 0; i < b; i++) {
        emot += a;
        document.write(`${emot} <br>`);
    }
}

const pyramid3 = (a, b) => {
    let emot = "";
    for (let i = 0; i < b; i++) {
        emot += a;
        document.write(`${emot} <br>`);
    }
}

pyramid1(emoticon,cnt);
document.write('<br>');
pyramid2(emoticon,cnt);
document.write('<br>');
pyramid3(emoticon,cnt);

