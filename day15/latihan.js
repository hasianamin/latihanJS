let output = ''
let z = 1

const createStar = (inp) => {
    for(let i = 1; i <= inp; i++){
        for(let j = 1; j < i; j++){
            if(i % 2 == 0){
                output += '*'
            } else {
                output += z
                z++
            }
        }
        output += '\n'
    }
    return output
}

console.log(createStar(6))