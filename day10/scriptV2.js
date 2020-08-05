let listProduct = []
let listCategory = ['elektronik', 'pakaian', 'otomotif']

class Product {
    constructor(_id, _name, _category, _price, _stock){
        this.id = _id
        this.name = _name
        this.category = _category
        this.price = _price
        this.stock = _stock
    }
}

const showCategory = () => {
    let selectCategory = document.getElementsByName('category')
    selectCategory.forEach((val, ind) => {
        let cat =''
        listCategory.forEach((value, index) => {
            cat += `<option value='${value}'>${value}</option>`
            val.innerHTML = cat
        })
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

    console.log(inputName)
    console.log(inputPrice)
    console.log(inputCategory)
    console.log(inputStock)
    console.log(inputId)
    listProduct.push(prod)
    console.log(listProduct)
    showData()
}

const showData = () => {
    let show = ''
    let render = document.getElementById('render')
    listProduct.forEach((value, index) => {
        show += `<tr>
                <td>${value.id}</td>
                <td>${value.category}</td>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>${value.stock}</td>
                </tr>`
        render.innerHTML = show
    })

}

const funFilterCategory = () => {
    let showByCategory = ''
    let filterCategory = document.getElementById('categoryFilter').value
    listProduct.forEach((value, index) => {
        if(value.category == filterCategory){
            showByCategory += `<tr>
                                <td>${value.id}</td>
                                <td>${value.category}</td>
                                <td>${value.name}</td>
                                <td>${value.price}</td>
                                <td>${value.stock}</td>
                                </tr>`
            render.innerHTML = showByCategory                
        }else{
            showByCategory += ''
            render.innerHTML = showByCategory  
        }
    })
}

const funFilterName = () => {
    let showByName = ''
    let filterName = document.getElementById('keyword').value
    listProduct.forEach((value, index) => {
        let check = value.name.match(filterName)
        if(check){
            showByName += `<tr>
                        <td>${value.id}</td>
                        <td>${value.category}</td>
                        <td>${value.name}</td>
                        <td>${value.price}</td>
                        <td>${value.stock}</td>
                        </tr>`
            render.innerHTML = showByName 
        }else{
            showByName += ''
            render.innerHTML = showByName
        }
    })
}

const funFilterPrice = () => {
    let showByPrice = ''
    let min = document.getElementById('min').value
    let max = document.getElementById('max').value
    console.log(parseInt(min))
    console.log(parseInt(max))
    listProduct.forEach((value, index) => {
        if(value.price >= parseInt(min) && value.price <= parseInt(max)){
            showByPrice += `<tr>
                        <td>${value.id}</td>
                        <td>${value.category}</td>
                        <td>${value.name}</td>
                        <td>${value.price}</td>
                        <td>${value.stock}</td>
                        </tr>`
            render.innerHTML = showByPrice
        }else{
            showByPrice += ''
            render.innerHTML = showByPrice
        }
    })
}