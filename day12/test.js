let listProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }]

let listId = [1579581080923, 1579581081342, 1579581081130]

let res = 0

const checkId = (x) => {
    return x.id == listId[2]
}

const myFunction = () => {
    return res = listProduct.findIndex(checkId)
}

console.log(myFunction())
