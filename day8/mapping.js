let nums = [1,4,9,16,25]

//menggunakan mapping
let sqrt = nums.map(Math.sqrt)
console.log(sqrt)

let res = []
for(let i = 0; i < nums.length; i++){
    res[i] = Math.sqrt(nums[i])
}
console.log(res)
console.log('=====')

let hasilAkhir = []
const output = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

output(nums, (num) => {
    hasilAkhir.push(Math.sqrt(num))
})

console.log(hasilAkhir)