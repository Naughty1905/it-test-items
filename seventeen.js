function pascalsTriangle(n) {
    let arr = [1];
    let finalArray = [];
    let valuesArray = [];
    for (let i = 0; i < n; i++) {
        finalArray = finalArray.concat(arr);
        arr.unshift(0);
        arr.push(0);
        valuesArray = [];
        for (let j = 0; j < arr.length - 1; j++) {
            valuesArray.push(arr[j] + arr[j + 1]);
        }
        arr = valuesArray;
    }
    return finalArray;
}

