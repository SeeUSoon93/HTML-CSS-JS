const plusFunc = () => {
    let spanVal = document.getElementById('spanTag');
    let num = Number(spanVal.innerText)    
    num += 1;
    spanVal.innerText = num;       
}   

const minusFunc = () => {
    let spanVal = document.getElementById('spanTag');
    let num = Number(spanVal.innerText)
    if (num == 0) {
        spanVal.innerText = num
    } else {
        num -= 1;
        spanVal.innerText = num                        
    }
}

const resetFunc = () => {
    let spanVal = document.getElementById('spanTag');
    spanVal.innerText = 0;
     
}