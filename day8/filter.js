let num = [0,1,2,3,4,5]
//menggunakan filter
let genap = num.filter((val) => val % 2 == 0)
console.log(genap)

let res =[]
for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0) res.push(num[i])
}
console.log(res)
