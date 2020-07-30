let num = [0,1,2,3,4,5]
//menggunakan filter
let genap = num.filter((val) => val % 2 == 0)
console.log(genap)

let res =[]
for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0) res.push(num[i])
}
console.log(res)

const bebas = (newarr = [], cb) => {
    var output = []
    for(let i = 0; i < newarr.length; i++){
        if(cb(newarr[i])){
            output.push(newarr[i])
        }
    }
    return output
}

const cek = (val) => val % 2 == 0 
const angkaGenap = bebas(num, (val) => val % 2 == 0)
console.log(angkaGenap)
