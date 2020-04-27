function isBalanced(string) {
    if (string[0] === '}' || string.length % 2) {
        return false;
    }
    let counter = 0;
    const sortArray = string.split('').filter(el => el === '{' || el === '}');

    sortArray.forEach((el) => el === '{' ? counter += 1 : counter -= 1);
    return counter === 0;
}


