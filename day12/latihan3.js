let arr = [25, 10, 5, 1]
// arr.sort(function(a, b){return a - b});
// console.log(arr)

const checkCoin = (coin) => {
    arr.sort(function(a, b){return b - a});
    let check1 = coin / arr[0]
    check1 = Math.trunc(check1)
    
    let sisa25 = coin - (arr[0] * check1)

    let check2 = sisa25 / arr[1]
    check2 = Math.trunc(check2)
    let sisa10 = sisa25 - (arr[1] * check2)

    let check3 = sisa10 / arr[2]
    check3 = Math.trunc(check3)
    let sisa5 = sisa10 - (arr[2] * check3)

    let check4 = sisa5 / arr[3]
    check4 = Math.trunc(check4)
    let sisa1 = sisa5 - (arr[3] * check4)

    let res = `
    ${arr[0]} = ${check1}
    ${arr[1]} = ${check2}
    ${arr[2]} = ${check3}
    ${arr[3]} = ${check4}
    result = ${check1 + check2 + check3 + check4}
    `
    return res
}
console.log(checkCoin(50))