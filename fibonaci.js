const funcF = function (num) {
    if (num <= 1) {
        return num;
    }
    return funcF(num - 1) + funcF(num - 2);
}
