
    let a = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
    let res = a.split(' ')
    let length = res.length
    for(let i=0; i < length; i++){
      res[i] = parseInt(res[i])
    }
    let max = Math.max(...res)
    max = NumberInt(max)
    let min = Math.min(...res)
    min = NumberInt(min)
    let output = console.log(max + ' ' + min)
    
    