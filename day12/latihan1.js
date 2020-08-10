const lelang = (a) => {
    let priceInit = 10000
    let x = 0
    for(let i=0; i < a; i++){
        x++
        if(x == 4){
            priceInit = Math.ceil(priceInit + (priceInit * 10 / 100))
            x = 0
        }else{
            priceInit = Math.ceil(priceInit + (priceInit * 20 / 100))
        }
    }
    return priceInit > 30000000? `menit ke ${a} barang sudah dibeli` : priceInit
}
console.log(lelang(2))