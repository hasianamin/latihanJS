let pwdStrength = 0
//with regex
const checkPwd = (str) => {
    let capLet = str.match(/[A-Z]/g)
    if(capLet) pwdStrength += 1
    
    let smlLet = str.match(/[a-z]/g)
    if(smlLet) pwdStrength += 1
    
    let num = str.match(/[0-9]/g)
    if(num) pwdStrength += 1
    
    if(pwdStrength <= 1) return 'weak pwd'
    else if(pwdStrength <= 2) return 'strong pwd'
    else return 'very strong pwd'
}

//without regex
const manualCheck = (str) => {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let capital = letters.toUpperCase()
    let numbers = '1234567890'
    let cap = 0, low = 0, num = 0
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < letters.length; j++){
            if(str[i] == letters[j]) low = 1
            else low += 0
        }
        for(let k = 0; k < capital.length; k++){
            if(str[i] == capital[k]) cap = 1
            else cap += 0
        }
        for(let l = 0; l < numbers.length; l++){
            if(str[i] == numbers[l]) num = 1
            else num += 0
        }
    }
    pwdStrength = low + cap + num

    if(pwdStrength <= 1) return 'weak pwd'
    else if(pwdStrength <= 2) return 'strong pwd'
    else return 'very strong pwd'
}

// console.log(checkPwd('welcom123'))
console.log(manualCheck('welcom123E'))
