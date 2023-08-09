const marginFunc = () => {
    let red = document.querySelector('#redBox');
    let green = document.querySelector('#greenBox');
    let blue = document.querySelector('#blueBox');
    let gray = document.querySelector('#grayBox');
    green.style.margin = '0 0 0 100px'
    blue.style.margin = '0 0 0 200px'
    gray.style.margin = '0 0 0 300px'
}
const borderFunc = () => {
    let boxElement = document.querySelectorAll('div');
    for (let i = 0; i < 4; i++) {
        boxElement[i].style.borderTopRightRadius = '50%'
        boxElement[i].style.borderBottomLeftRadius = '50%'
    }
}