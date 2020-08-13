// function getOrder(input) {
//     return "";
//   }




// getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

let str = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
let arrStr = str.split('')
let menu = ['burger','fries','chicken','pizza','sandwich','onionrings','milkshake','coke']
let order = []
let tempReg = ''

for(let i = 0; i < menu.length; i++){
    tempReg = new RegExp(menu[i],"g")
    order[i] = str.match(tempReg)
}

let output = order.filter((value) => {
    return value != null
})
let finalResult = output.join(' ')
finalResult = finalResult.replace(/,/g, ' ')
let upper = finalResult.split(' ')
let fin = []
let x, y
for(let j = 0; j < upper.length; j++){
    x = upper[j][0].toUpperCase()
    y = upper[j].slice(1)
    fin[j] = x + y
}

console.log(finalResult)
console.log(fin.join(' '))
