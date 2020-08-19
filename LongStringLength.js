const reduceString = function (str){
    if (str.length > 40) {
        return  str.slice(0,18) + '...' + str.slice(-19);
    }
    return str;
}
