let hexa = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
let sisa = 0
let simpan = []
let i = 0

function eksekusi(input){
    while(input % 16 > 1){
        simpan[i] = input % 16
        sisa = Math.floor(input / 16)
        input = sisa
        i++
    }
    for(let j = 0; j < simpan.length; j++){
        simpan[j] = hexa[simpan[j]-1]
    }
    simpan.reverse()
    let res = simpan.join('')
    return res
}
console.log(eksekusi(150))