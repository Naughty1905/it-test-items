function mix(s1, s2) {
    let letters1 = s1.split("").filter(letter=>letter.search(/[a-z]/g)!==-1),
        letters2 = s2.split("").filter(letter=>letter.search(/[a-z]/g)!==-1),
        letter_obj = {},
        letters = [],res_str = '';
    letters1.forEach(letter=>{
        if(letter_obj[letter]) ++letter_obj[letter][0]
        else letter_obj[letter] = [1,0]
    })
    letters2.forEach(letter=>{
        if(letter_obj[letter]) ++letter_obj[letter][1]
        else letter_obj[letter] = [0,1]
    })
    for(let letter in letter_obj){
        letters.push([letter,letter_obj[letter][0],letter_obj[letter][1]])
    }
    letters = letters
        .filter(letter=>Math.max(letter[1],letter[2])>1)
        .map(letter=>{
            if(letter[1] === letter[2]) return [letter[0],letter[1],"="]
            else if(letter[1]>letter[2]) return [letter[0],letter[1],1]
            else if(letter[1]<letter[2]) return [letter[0],letter[2],2]
        })
        .sort((letter1,letter2)=>{
            if(letter1[1]===letter2[1]){
                let [letter_1,qnty1,verdict1] = letter1
                let [letter_2,qnty2,verdict2] = letter2
                if(verdict1 !== verdict2){
                    if(verdict1 === 1 && verdict2 === '=') return -1
                    else if(verdict1 === 1 && verdict2 === 2) return -1
                    else if(verdict1 === 2 && verdict2 === '=') return -1
                    else if(verdict1 === 2 && verdict2 === 1) return 1
                    else if(verdict1 === '=' && verdict2 === 1) return 1
                    else if(verdict1 === '=' && verdict2 === 2) return 1
                }
                else{
                    return letter_1 > letter_2 ? 1 : -1
                }
            }
            else return letter2[1]-letter1[1]
        })

    letters.forEach(letter=>{
        res_str+=`${letter[2]}:${letter[0].repeat(letter[1])}/`
    })
    return res_str.substring(0,res_str.length-1)
}
