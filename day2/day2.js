var a = 'testing'

for (i=0; i < 10; i++){
    console.log(a + i)
}

//ini untuk komen
var a = 'bukan' // var dapat melakukan redeclare tapi membuang memory
let b = 'test banyaka amad amat' // mencegah duplikasi
const phi = 3.14 // nilai konstanta tdk dapat diubah
let angkaString = "123" 

console.log(a.length) // melihat panjang variabel
console.log(b.indexOf('s')) // mengambil index dimulai dari 0
console.log(b.substr(1,3)) // mengambil string berdasarkan ketentuan (start, end)
console.log(b.slice(1,3)) // mengambil string berdasarkan ketentuan (start, sebelum end)
console.log(b.toUpperCase()) // uppercase string
console.log(b.toLowerCase()) // lowercase string
b = b.replace('amad','amat') // melakukan replace
console.log(b)
b = b.replace(/am/g, 'mas') // replace dengan regex
console.log(b)
console.log(phi.toString()+'ssss')
console.log(parseInt(angkaString))
console.log(typeof(angkaString))
var e = 99999999999999999999999
console.log(e)
console.log(`${b} ${b}`) //penulisan es 6 lebih simple

for(i=0; i < 5; i++){
    console.log(`\n`)
}

let tanggal = new Date()
let year =  tanggal.getFullYear()
let month = tanggal.getMonth() + 1
let date = tanggal.getDate()
let hours = tanggal.getHours()
let minutes = tanggal.getMinutes() 

let fullDay = `${date}/${month}/${year} \n${hours}:${minutes}`
console.log(fullDay)
console.log(tanggal)
for(i=0; i < 5; i++){
    console.log(`\n`)
}
let x=4, y=3, z=2, w
let step1 = x + y * z
let step2 = x * y
let step3 = step1 / step2
w = step3**z
console.log(w)

for(i=0; i < 5; i++){
    console.log(`\n`)
}

console.log(Math.pow(8,2))