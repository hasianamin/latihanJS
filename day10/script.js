let fruitList = [], cartList = []
let total

class Fruit {
    constructor(_name, _img, _price){
        this.name = _name
        this.img = _img
        this.price = _price
    }
}

class Cart{
    constructor(_name, _img, _price, _amount){
        this.name = _name
        this.img = _img
        this.price = _price
        this.amount = _amount
    }
}

let apple = new Fruit("apple", "apple.png", 6000)
let orange = new Fruit("orange", "orange.png", 4000)
let durian = new Fruit("durian", "durian.png", 35000)
fruitList.push(apple, orange, durian)


console.log(fruitList)

let tableItem = document.getElementById("item")
let tableCart = document.getElementById("cart")
let tableHead = document.getElementById("head")

const showItemList = () => {
    let listItem = ''
    fruitList.forEach((val, index) => {
        listItem += `<tr>
                        <td>${index+1}</td>
                        <td>${val.name}</td>
                        <td><img src='${val.img}' alt=''></td>
                        <td>${val.price}</td>
                        <td><input type='button' onclick='addToCart(${index})' value='add to cart'/></td>
                    </tr>`
    })
    tableItem.innerHTML = listItem
}

showItemList()

const addToCart = (getIndex) => {
    let valueName = fruitList[getIndex].name
    let valueImg = fruitList[getIndex].img
    let valuePrice = fruitList[getIndex].price
    let cartFruit = new Cart(valueName, valueImg, valuePrice, 1)
    cartList.push(cartFruit)
    showCart()
}


const showCart = () => {
    tableHead.innerHTML = `<tr>
                                <th>No</th>
                                <th>Fruit</th>
                                <th>Image</th>
                                <th>Price</th>
                            </tr>`
    let listToPay = ''
    cartList.forEach((val, index) => {
        listToPay += `<tr>
                        <td>${index+1}</td>
                        <td>${val.name}</td>
                        <td><img src='${val.img}' alt=''></td>
                        <td>${val.price}</td>
                    </tr>`
    })
    tableCart.innerHTML = listToPay

    let priceToPay = document.getElementById('info')
    priceToPay.innerHTML = `<h2>Your Cart</h2>
                            <p>Total = ${showTotal()}</p>
                            <input type='button' onclick='confirmToPay()' value='Pay bills?'/>`
    
    console.log(cartList)
    console.log(total)
}

const showTotal = () => {
    total = 0
    cartList.forEach((value, index) => {
        total += value.price
    })
    return total
}


let limit
let time = 10
let timer = document.getElementById("timer")

const timeLimit = () => {
    time--
    if(time == 0){
        clearInterval(limit)
        alert("time's up, transaction has been canceled")
        location.reload();
    }else{
        timer.innerHTML = `<p>${time}</p>`
    }
}


const confirmToPay = () => {
    limit = setInterval(timeLimit, 1000)
    let bayar = document.getElementById('payment')
    bayar.innerHTML = `</p><input type="text"  id="balance" autocomplete="off">
                        <input type="button" onclick="pay()" value="Submit"/>`
}

const pay = () => {
    let balance = document.getElementById('balance').value
    let changes = balance - total
    if(balance < total){
        alert('your balance is less than the total payment')
    }else {
        if(changes == 0){
            alert('payment success')
            alert('thanks for shopping with us')
            location.reload();
        }else {
            alert('payment success')
            alert('Here is your changes ' + changes)
            alert('thanks for shopping with us')
            location.reload();
        }
    }
}