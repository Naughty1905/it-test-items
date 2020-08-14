const ff = function (num) {
    if (num <= 1) {
        return num;
    }
    return ff(num - 1) + ff(num - 2);
}
