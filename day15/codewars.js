// const check = (s) => {
//     let newStr = []
//     for(let i = 0; i < s.length; i++){
//         if(s[i] == s[i].toUpperCase()){
//             newStr[i] = s[i].toLowerCase()
//         } else{
//             newStr[i] = s[i].toUpperCase()
//         }
//     }
//     return newStr.join('')
// }

// console.log(check('AbC'))

//1 jam pertama 30
// setiap 30mnt 10
//toleransi +5 menit
let mnt = 335
let toPay = 0
let countMnt = 60
let sisa, mod, divid

countMnt = mnt - countMnt
if(countMnt < 0){
    toPay = 30
} else{
    toPay = 30
    divid = Math.floor(countMnt / 30)
    mod = countMnt % 30
    if(mod > 5){
        toPay += 10 + (10 * divid)
    } else{
        toPay += 10 * divid
    }
}


console.log(toPay)