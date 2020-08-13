const hurufTengah = (str) => {
    if(str.length % 2 == 0){
        let midA = str.length / 2 - 1
        let midB = str.length / 2
        return `${str[midA]} ${str[midB]}`
    } else{
        let midC = Math.floor(str.length / 2)
        return str[midC]
    }
}

console.log(hurufTengah('abc')) // b
console.log(hurufTengah('abcde')) // bc
console.log(hurufTengah('abcdefgh')) // bc


