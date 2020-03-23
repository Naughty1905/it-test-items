// test for finding the sum of element indexes ,
// where the sum of all digits before the element equals
// the sum of all digits after the element
const fs = require('fs');

//result arraySumIndex on example equals 9
// const example = [-7,1,5,2,-4,3,0];

function arraySumIndex(array) {
    let sumOfArray = array.reduce((res, el) => res + el, 0);
    let iterateSum = 0;
    let counterOfIndex = 0;

    // wrong method and i dont know why
    // let counterOfIndex = array.reduce((res, el) => {
    //         sumOfArray -= el;
    //         if (iterateSum === sumOfArray) {
    //             res += array.indexOf(el);
    //         }
    //         iterateSum += el;
    //         return res;
    //     }
    //     , 0);

    array.forEach((el,index) => {
        sumOfArray -= el;
        if (iterateSum === sumOfArray){
            counterOfIndex += index;
        }
        iterateSum += el;
    });

    if (counterOfIndex !== 0) {
        return counterOfIndex;
    }
    return -1;
}

fs.readFile('./bigarray.txt', (err,data) => {
    if (err) throw err;
    const array = data.toString().split(',');
    const finalArray = array.map(string => parseInt(string));
    console.log(arraySumIndex(finalArray));
});

