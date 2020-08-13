const hitungVocal = (str) => {
    let countCons = str.match(/[a|i|u|e|o]/g)
    return countCons.length
}

console.log(hitungVocal('abcdefghi'))