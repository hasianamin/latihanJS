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