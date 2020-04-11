function checkHorizontalLines(board){
    let array = [];
    let length = board.length;
    for(let i = 0; i<length; i++){
        for(let j = 0; j<length; j++){
            if(array.includes(board[i][j])){
                return false;
            } else {
                array.push(board[i][j]);
            }
        }
        array = [];
    }
    return true;
}

function checkVerticalLines(board){
    let array = [];
    let length = board.length;
    for(let i = 0; i<length; i++){
        for(let j = 0; j<length; j++){
            if(array.includes(board[j][i])){
                return false;
            } else {
                array.push(board[j][i]);
            }
        }
        array = [];
    }
    return true;
}

function checkBox(indexX, indexY, board){
    array = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array.includes(board[indexX+i][indexY+j])){
                return false;
            } else {
                array.push(board[indexX+i][indexY+j]);
            }
        }
    }
    return true;
}

function checkBoxes(board){
    let inputs = [0,3,6];
    for(let i of inputs){
        for(let j of inputs){
            if(!checkBox(i,j,board)){
                return false;
            }
        }
    }
    return true;
}

function validSolution(board){
    return checkHorizontalLines(board) && checkVerticalLines(board) && checkBoxes(board);
}