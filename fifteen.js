function isBalanced(string){
    const brackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    const sortString = string.split('').filter(el => el===')' || el==='(' || el==='[' || el===']' || el==='{' || el==='}');
    if (sortString.length%2 || sortString[0] === ')' || sortString[0] === '}' || sortString[0] === ']') {
        return false;
    }
    let stack = [];
    let ansString = '';
    const lengthSortString = sortString.length
    for (let i = 0; i < lengthSortString; i++) {
        let element = sortString[i];
        if (brackets[element]){
            stack.push(element);
        } else {
            if(stack.length===0){
                return false;
            }
            let removeItem = stack.pop();
            element = brackets[removeItem];
        }
        ansString += element;
    }
    return stack.length === 0;
}

