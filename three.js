function squareDigits(num){
    let final = parseInt(num.toString().split('').map(elem => elem**2).join(''), 10);
    return final;
}
