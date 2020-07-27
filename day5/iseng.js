let kalimat = 'halo duniz'
kalimat = kalimat.split('')

//ubah halo duniz menjadi ibkp evoja
let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for (let i = 0; i < kalimat.length; i++){
    //cek index huruf
    for(let j = 0; j < alp.length; j++){
        if(kalimat[i] == 'z'){
            kalimat[i] = 'a'
        }else{
            if(kalimat[i] == alp[j]){
                kalimat[i] = alp[j+1]
                break
            }
        }
    }
}
console.log(kalimat.join(''))