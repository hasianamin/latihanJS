//destructuring
// var obj = {
//     head : 1,
//     eyes : 2,
//     hands : 2,
//     ears : 2
// }
// var obj1 = {
//     kaki : 2
// }

// console.log(obj)
// obj = {...obj, ...obj1} //ini es6 replaceing with object
// obj = {...obj, nose : 1} // replacing with props
// console.log(obj)

// function newFunc({head, eyes}){
//     return `manusia punya ${head} kepala dan ${eyes} mata`
// }

// console.log(newFunc(obj))
// console.log(newFunc({head : 5, eyes: 11}))

let angka = [1,2,3,4,1,2,5,6];
console.log(angka);
let nomor = new Set(angka);
console.log(nomor);
let arrayAngka = [...nomor]
console.log(arrayAngka);