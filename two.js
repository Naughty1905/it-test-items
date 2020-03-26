function reverseArray(array) {
    for(let i=0;i<array.length;i++){
        let temp = array[array.length-1];
        array.pop();
        array.splice(i,0,temp);
    }
    return array;
}


//for example
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
