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
    let numbers = '1234567890'
    let low = 0, num = 0
    let check = []
    check = str.split('')
    let temp = check.filter((value) => {
        return value != ' '
    })
    if(temp.length < 6){
        return "password is less than 6 character"
    } else{
        let inputStr = str.toLowerCase()
        for(let i = 0; i < inputStr.length; i++){
            for(let j = 0; j < letters.length; j++){
                if(inputStr[i] == letters[j] && !low) low = 1
            }
            for(let l = 0; l < numbers.length; l++){
                if(inputStr[i] == numbers[l] && !num) num = 1
            }
        }

        if(low && num){
            return 'password valid'
        } else if(!low){
            return 'password must contain letters'
        } else{
            return 'password must contain numbers'
        }
    }
}

console.log(checkPwd('welcom123'))
console.log(manualCheck('welcom123E'))
console.log(manualCheck('welcom123'))
console.log(manualCheck('welcom'))
console.log(manualCheck('wel co '))
console.log(manualCheck('123 456 7'))
console.log(manualCheck('a 1 2 3'))
