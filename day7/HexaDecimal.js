let hexa = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
let input = 150
let sisa = 0
let simpan = []
let i = 0

while(input % 16 > 1){
    simpan[i] = input % 16
    sisa = Math.floor(input / 16)
    input = sisa
    i++
}
for(let i = 0; i < simpan.length; i++){
    simpan[i] = hexa[simpan[i]-1]
}
simpan.reverse()
let res = simpan.join('')
// console.log(i)
// console.log(simpan)
console.log(res)