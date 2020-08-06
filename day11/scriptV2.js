let listProduct = []
let listCategory = ['elektronik', 'pakaian', 'otomotif']
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

const showCategory = () => {
    let selectCategory = document.getElementsByName('category')
    selectCategory.forEach((val, ind) => {
        let cat =''
        listCategory.forEach((value, index) => {
            cat += `<option value='${value}'>${value}</option>`
            val.innerHTML = cat
        })
    })

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
    
    document.getElementById('nameInput').value = ''
    document.getElementById('priceInput').value = ''
    document.getElementById('stockInput').value = ''
 
    listProduct.push(prod)
    showData()
}

const showData = () => {
    let show = ''
    showInit = listProduct.map((value, index) => {
        return (`<tr>
                    <td>${value.id}</td>
                    <td>${value.category}</td>
                    <td>${value.name}</td>
                    <td>${value.price}</td>
                    <td>${value.stock}</td>
                    <td>
                        <input type='button' onclick='deleteData(${index})' value='Delete'>
                        <input type='button' onclick='editData(${index})' value='Edit'>
                    </td>
                </tr>`)
    }).join('')
    document.getElementById('render').innerHTML = showInit
}

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
        return (`<tr>
        <td>${value.id}</td>
        <td>${value.category}</td>
        <td>${value.name}</td>
        <td>${value.price}</td>
        <td>${value.stock}</td>
        <td>
            <input type='button' onclick='deleteData(${index})' value='Delete'>
            <input type='button' onclick='editData(${index})' value='Edit'>
        </td>
        </tr>`)
    })
}

const deleteData = (data) => {
    listProduct.splice(data, 1)
    showData()
}

const editData = (data) => {
    
    let editName = prompt(`Edit name for ${listProduct[data].name}`)
    listProduct[data].name = editName
    let editPrice = prompt(`Edit price for ${listProduct[data].price}`)
    listProduct[data].price = editPrice
    let editCategory = prompt(`Edit category for ${listProduct[data].category}`)
    listProduct[data].category = editCategory
    let editStock = prompt(`Edit stock for ${listProduct[data].stock}`)
    listProduct[data].stock = editStock
    showData()
    console.log(listProduct[data])
}