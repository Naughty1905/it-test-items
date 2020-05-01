function sum(num) {
    let cache = [];
    function split(num, add){
        if(num < 1 || add < 1) return 0;
        if(num === 1 || add === 1) return 1;
        if(num < add) {
            if(cache[num] === undefined){ cache[num] = [];}
            if(!cache[num][num]){
                cache[num][num] = split(num, num);
            }
            return cache[num][num];
        }
        if(num === add){
            if(cache[num] === undefined){ cache[num] = [];}
            if(!cache[num][add - 1]){
                cache[num][add - 1] = split(num, add - 1)
            }
            return cache[num][add - 1] + 1;
        }
        if(num > add){
            if(cache[num] === undefined){ cache[num] = [];}
            if(!cache[num][add - 1]){
                cache[num][add - 1] = split(num, add - 1);
            }
            if(cache[num - add] === undefined){ cache[num - add] = [];}
            if(!cache[num - add][add]){
                cache[num - add][add] = split((num - add), add)
            }
            return cache[num][add - 1] + cache[num - add][add]
        }
    }
    return split(num, num);
}
