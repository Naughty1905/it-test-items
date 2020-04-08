snail = function(array) {
    let result;
    while (array.length) {
        result = (result ? result.concat(array.shift()) : array.shift());
        for (let i = 0; i < array.length; i++)
            result.push(array[i].pop());
        result = result.concat((array.pop() || []).reverse());
        for (let i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());
    }
    return result;
}
