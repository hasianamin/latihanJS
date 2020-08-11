let listProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }]

let cart = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, qty : 1},
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, qty : 1},
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, qty : 1},
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, qty :1 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, qty :1 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, qty :1 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, qty :1 }
]

let toPay = []

class ToPay {
    constructor(_id, _name, _price, _qty){
        this.id = _id
        this.name = _name
        this.price = _price
        this.qty = _qty
    }
}

let count = 1
let temp = []

listProduct.forEach((value, index) => {
    cart.forEach((val) => {
        if(val.id == value.id){
            temp[index] = count++
        }
    })
    count = 1
})

let total

listProduct.forEach((value, index) => {
    if(temp[index] === 'undefined'){
        temp[index] = 'hi'
    }
    total = new ToPay(value.id, value.name, value.price, temp[index])
    toPay.push(total)
})

console.log(total)
console.log(toPay)