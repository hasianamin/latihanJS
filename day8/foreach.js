let nums = [10,20,30,40,50,60]

//menggunakan foreach
let res=''
nums.forEach(function(num, index){
    return res += `${index+1}.Value = ${num}, Index = ${index}\n`
})
console.log(res)
console.log('============')
for(let i = 0; i < nums.length; i++){
    console.log(`${i+1}.Value = ${nums[i]}, Index = ${i}`)
}

const user = (name, greeting, callback) => {
    return callback(name, greeting)
}

let cetak = user('ian', 'hallo ', (name, greeting) => {
    return greeting + name}
)

console.log(cetak)
console.log('=====')

let result = []

const output = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

output(nums, (num) => {
    result.push(num)
})

console.log(result)
