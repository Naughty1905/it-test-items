function arraySumIndex(array) {
    let sumOfArray = array.reduce((res, el) => res + el, 0);
    let iterateSum = 0;
    let counterOfIndex = array.reduce((res, el) => {
            sumOfArray -= el;
            if (iterateSum === sumOfArray) {
                res += array.indexOf(el);
            }
            iterateSum += el;
            return res;
        }
        , 0);

    if (counterOfIndex !== 0) {
        return counterOfIndex;
    }
    return -1;
}
