let inputan = 50
let simpan = []
let sisa = 0
let i = 0
while(inputan / 2 > 0){
    simpan[i] = inputan % 2
    sisa = Math.floor(inputan/2)
    inputan = sisa
    i++
}
simpan.reverse()
let res = simpan.join('')
console.log(res)