function moreZeros(string) {
    let arrAscii = string
        .split('')
        .map(element => element.charCodeAt(0).toString(2));
    let final = arrAscii
        .filter(element => element.split('0').join('').length < element.split('1').join('').length)
        .map(element => String.fromCharCode(parseInt(element, 2).toString()))
        .filter((v, i, a) => a.indexOf(v) === i);
    return final;
}

