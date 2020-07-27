let a, b, c

let contoh=(a, b) => {
    c = (a + b) * tiga()
    return c
}

let tiga=() => {
    return 3
}

console.log(contoh(10,5))
console.log(contoh(20,25))

let z = 5
let res = z % 2 == 0? 'genap' : 'ganjil'
console.log(res)


let angka = 0
let cek
let hitung = () =>{
    angka++
    cek = angka > 5? clearInterval(y): console.log(angka)
}

let y = setInterval(hitung, 1000)