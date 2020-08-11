// let modus = [1,2,2,2,2,2,3,4,4,5,6,7,7,7,7,0,7,7,7,0,7,9]

// let num = [0,1,2,3,4,5,6,7,8,9]

// let res = []
// let count = 0
// num.forEach((value, index) => {
//     modus.forEach((val) => {
//         if(val == value){
//             res[index] = count + 1 
//             count++
//         }
//         if(val != value){
//             res[index] = count + 0
//         }
//     })
//     count = 0
// });

// let max = Math.max(...res)

// console.log(res)
// console.log(res[0])
// console.log(max)
// console.log(res.indexOf(max))


const checkOddEven = (str) => {
    let num = str.split(' ')
    let date = new Date().getDate()
    // return num[1]
    let isOdd = date % 2 == 1? 'odd' : 'even'
    let stat
    if(num[1] % 2 == 0){
        stat = 'even'
    }else{
        stat = 'odd'
    }
    return isOdd == stat? 'boleh lewat' : 'tidak boleh lewat'
}

console.log(checkOddEven('B 1124 KVD'))