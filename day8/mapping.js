let num = [1,4,9,16,25]

//menggunakan mapping
let sqrt = num.map(Math.sqrt)
console.log(sqrt)

let res = []
for(let i = 0; i < num.length; i++){
    res[i] = Math.sqrt(num[i])
}
console.log(res)