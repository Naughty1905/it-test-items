function getPINs(observed) {
    let array = [];
    array[0] = observed.split('');
    let temp = PIN(array,array[0].length);
    return temp.map(function(x){return x.join('')});
}

function PIN(array,index){
    let m = [[8], [2, 4], [1, 3, 5], [2, 6], [1, 5, 7], [4, 2, 6, 8], [3, 5, 9], [4, 8], [7, 5, 9, 0], [8, 6]];
    let temp = [];
    let copy = [];
    temp = array.slice();
    index = index - 1;
    for(let  i = 0; i < array.length;i++ ){
        copy = array[i].slice();
        let p = m[copy[index]].length;
        let c = copy[index];
        console.log(copy,index,copy[index]);
        for(let j = 0; j < p;j++){
            copy[index] = m[c][j];
            temp.push(copy.slice());
        }
    }
    return index? PIN(temp,index):temp;
}
