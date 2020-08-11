let listProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }]
let listCart = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, quantity : 0},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, quantity : 0},
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, quantity : 0},
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, quantity : 0}    
]
let listCategory = ['Fast Food', 'Electronic', 'Cloth', 'Fruit']
let newArr, showInit

class Product {
    constructor(_id, _name, _category, _price, _stock){
        this.id = _id
        this.name = _name
        this.category = _category
        this.price = _price
        this.stock = _stock
    }
}

class Cart {
    constructor(_id, _name, _category, _price, _quantity){
        this.id = _id
        this.name = _name
        this.category = _category
        this.price = _price
        this.quantity = _quantity
    }
}

const addToCart = (data) => {
    listProduct[data].stock -= 1
    listCart[data].quantity += 1
    console.log(listCart[data])
    showCart()
    showData()
}

const showCart = () => {
    let cartToPay = document.getElementById('cart')
    let listToPay = ''
  
    listCart.forEach((value, index) => {
        if(value.quantity > 0){
            listToPay += `<tr>
                            <td>${value.id}</td>
                            <td>${value.category}</td>
                            <td>${value.name}</td>
                            <td>${value.price}</td>
                            <td>${value.quantity}</td>
                            <td><input type='button' onclick='deleteData(${index}, "cart")' value='Delete'></td>
                        </tr>`
        }
    })

    cartToPay.innerHTML = listToPay
    
    if(listCart.length){
        let pay = document.getElementById('pay')
        pay.innerHTML = `<br><input type='button' value='Payment' onclick='pay()'>`
    }else{
        pay.innerHTML = ``
    }
}

const pay = () => {
    let totalToPay = 0
    let detailsToPay = ''
    listCart.forEach((value) => {
        if(value.quantity > 0){
            totalToPay += parseInt(value.price * value.quantity)
            detailsToPay += `<p>${value.id} | ${value.category} | ${value.name} | ${value.price} | ${value.quantity}</p>`
        }
    })
    let tax = totalToPay * 10 / 100
    let finalResult = totalToPay + tax
    let details = `<h3>Sub Total = ${totalToPay}</h3>
                    <h3>Ppn = ${tax}</h3>
                    <h3>Total = ${finalResult}</h3>`  
    let paymentDetail = document.getElementById('transactionDetail')
    paymentDetail.innerHTML = detailsToPay + details
    
}

const showCategory = () => {
    let catInput = document.getElementById('categoryInput')
    let selectCatInput = ''
    listCategory.forEach((value, index) => {
        selectCatInput += `<option value='${value}'>${value}</option>`
        catInput.innerHTML = selectCatInput
    })

    let catFilter = document.getElementById('categoryFilter')
    let selectCatFilter = ''
    listCategory.forEach((value) => {
        let all = `<option value='All'>All</option>`
        selectCatFilter += `<option value='${value}'>${value}</option>`
        catFilter.innerHTML = all + selectCatFilter
    })
}
showCategory()

const funInputData = (e) => {
    e.preventDefault()
    let inputId = Date.now()
    let inputName = document.getElementById('nameInput').value
    let inputPrice = document.getElementById('priceInput').value
    let inputCategory = document.getElementById('categoryInput').value
    let inputStock = document.getElementById('stockInput').value
    let prod = new Product(inputId, inputName, inputCategory, inputPrice, inputStock)
    let cart = new Cart(inputId, inputName, inputCategory, inputPrice, 0)

    document.getElementById('nameInput').value = ''
    document.getElementById('priceInput').value = ''
    document.getElementById('stockInput').value = ''
 
    listProduct.push(prod)
    listCart.push(cart)
    showData()
}

const showData = () => {
    let show = ''
    showInit = listProduct.map((value, index) => {
        return (`<tr id='row${index}'>
                    <td>${value.id}</td>
                    <td>${value.category}</td>
                    <td>${value.name}</td>
                    <td>${value.price}</td>
                    <td>${value.stock}</td>
                    <td><input type='button' onclick='addToCart(${index})' value='Buy'></td>
                    <td><input type='button' onclick='deleteData(${index}, "product")' value='Delete'></td>
                    <td><input type='button' onclick='editData(${index})' value='Edit'></td>
                </tr>`)
    }).join('')
    document.getElementById('render').innerHTML = showInit
}

showData()

const funFilterName = () => {
    let filterName = document.getElementById('keyword').value
    newArr = listProduct.filter((value, index) => {
        return value.name.match(filterName)
    })
    document.getElementById('render').innerHTML = showFilter(newArr).join('')
}

const funFilterPrice = () => {
    let min = document.getElementById('min').value
    let max = document.getElementById('max').value
    newArr = listProduct.filter((value, index) => {
        return value.price >= parseInt(min) && value.price <= parseInt(max)
    })
    document.getElementById('render').innerHTML = showFilter(newArr).join('')
}

const funFilterCategory = () => {
    let filterCategory = document.getElementById('categoryFilter').value
    if(filterCategory != 'All'){
        newArr = listProduct.filter((value) => {
            return value.category == filterCategory && filterCategory != 'All'
        })
    }else{
        newArr = listProduct
    }
    document.getElementById('render').innerHTML = showFilter(newArr).join('')
}

const showFilter = (filterArr) => {
    return filterArr.map((value, index) => {
        return (`<tr id='row${index}'>
        <td>${value.id}</td>
        <td>${value.category}</td>
        <td>${value.name}</td>
        <td>${value.price}</td>
        <td>${value.stock}</td>
        <td><input type='button' onclick='addToCart(${index})' value='Buy'></td>
        <td><input type='button' onclick='deleteData(${index}, "product")' value='Delete'></td>
        <td><input type='button' onclick='editData(${index})' value='Edit'></td>
        </tr>`)
    })
}

const deleteData = (data, stat) => {
    if(stat == 'product'){
        listProduct.splice(data, 1)
        showData()
    }else{
        console.log(listCart[data].quantity)
        listProduct[data].stock += listCart[data].quantity
        listCart[data].quantity = 0
        showCart()
        showData()
    }
}

const editData = (data) => {  
    let row = document.getElementById(`row${data}`)
    let editField = `<td>${listProduct[data].id}</td>
                    <td>
                        <select id='categoryEdit${data}'>
                        </select>
                    </td>
                    <td><input type='text' id='nameEdit${data}' value='${listProduct[data].name}'></td>
                    <td><input type='text' id='priceEdit${data}' value='${listProduct[data].price}'></td>
                    <td><input type='text' id='stockEdit${data}' value='${listProduct[data].stock}'></td>
                    <td><input type='button' onclick='save(${data})' value='Save'></td>
                    <td><input type='button' onclick='cancel()' value='Cancel'></td>`

    row.innerHTML = editField
    let catEdit = document.getElementById(`categoryEdit${data}`)
    let selectCatEdit = ''
    let selectedCat = `<option value='${listProduct[data].category}'>${listProduct[data].category}</option>`

    let sel = listCategory.filter((value) => {
        return value != listProduct[data].category
    })

    console.log(sel)

    sel.forEach((value, index) => {
        selectCatEdit += `<option value='${value}'>${value}</option>`
    })
    catEdit.innerHTML = selectedCat + selectCatEdit
    return row
}

const cancel = () => {
    return showData()
}

const save = (index) => {
    let editCategory = document.getElementById(`categoryEdit${index}`).value
    let editName = document.getElementById(`nameEdit${index}`).value
    let editPrice = document.getElementById(`priceEdit${index}`).value
    let editStock = document.getElementById(`stockEdit${index}`).value
    listProduct[index].category = editCategory
    listProduct[index].name = editName
    listProduct[index].price = editPrice
    listProduct[index].stock = editStock
    listCart[index].category = editCategory
    listCart[index].name = editName
    listCart[index].price = editPrice
    console.log(editCategory)
    return showData()
}
