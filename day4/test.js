let s=''
        let limitJ=6
        let limitI=11

        let nilaiT=Math.floor(limitI/2+1)
        for(let i=0; i < limitI; i++){
            if(i > nilaiT){ //kalo kondisi i >=5 ke sini buat cetak separuh bawah
                for(let k=6; k <= limitI+1; k++){
                    if(k>i){
                        s+='-'
                    }
                    else{
                        s+='*'
                    }
                }
                s+='\n'
            }else{ //pertama ke sini karna i < 5
                for(let j=0; j <= limitJ; j++){ 
                    if(j>limitJ-i){ //bentuk rata kiri cetak separuh atas
                        s+='-'
                    }
                    else{
                        s+='*'
                    }
                }
                s+='\n'
            }
        }
        console.log(s)