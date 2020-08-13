let activity = [{name : "lari", image : "lari.png", day : "senin"},
{name : "renang", image : "renang.png", day : "selasa"}]

let days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
    
class CreateActivity {
    constructor(_name, _image, _day){
        this.name = _name
        this.image = _image
        this.day = _day
    }
}

const showContent = () => {
    let content = document.getElementById("content")
    let output = ''
    activity.map((value, index) => {
        output += `<tr id='row${index}'>
                        <td>${index + 1}</td>
                        <td>${value.name}</td>
                        <td><image src='${value.image}'></td>
                        <td>${value.day}</td>
                        <td>
                            <input type='button' onclick='edit(${index})' value='edit'>
                            <input type='button' onclick='del(${index})' value='delete'>
                        </td>
                    </tr>`
    })
    output += `<tr>
    <td></td>
    <td><input type='text' id='name' placeholder='activity name'></td>
    <td><input type='text' id='image' placeholder='activity image'></td>
    <td><select id='day'></select></td>
    <td><input type='button' onclick='add()' value='input data'></td>
    </tr>`
    content.innerHTML = output
}

showContent()

const selectDays = () => {
    let selection = `<option hidden>select day</option>`
    days.forEach((value) => {
        selection += `<option value='${value}'>${value}</option>`
    })
    document.getElementById('day').innerHTML = selection
}

selectDays()

const add = () => {
    let inputName = document.getElementById("name").value
    let inputImage = document.getElementById("image").value
    let inputDay = document.getElementById("day").value
    let insert = new CreateActivity(inputName, inputImage, inputDay)
    activity.push(insert)
    showContent()
    selectDays()
}

const del = (data) => {
    let delRow = `<td>${data + 1}</td>
    <td>${activity[data].name}</td>
    <td><image src='${activity[data].image}'></td>
    <td>${activity[data].day}</td>
    <td>
        <input type='button' onclick='delConfirm(${data})' value='yes'>
        <input type='button' onclick='cancel()' value='no'>
    </td>`
    document.getElementById(`row${data}`).innerHTML = delRow
}

const delConfirm = (data) => {
    activity.splice(data, 1)
    showContent()
    selectDays()
}

const edit = (data) => {
    let editRow = document.getElementById(`row${data}`)
    let editForm = `<td>${data}</td>
                    <td><input type='text' id='name${data}' value='${activity[data].name}'></td>
                    <td><input type='text' id='image${data}' value='${activity[data].image}'></td>
                    <td><select id='day${data}'></select></td>
                    <td><input type='button' onclick='save(${data})' value='save'><input type='button' onclick='cancel()' value='cancel'></td>`

    editRow.innerHTML = editForm
    let selectEdit = ''
    let selectedDay = `<option value='${activity[data].day}'>${activity[data].day}</option>`
    let temp = days.filter((value) => {
        return value != activity[data].day
    })
    temp.forEach((value) => {
        selectEdit += `<option value='${value}'>${value}</option>`
    })
    document.getElementById(`day${data}`).innerHTML = selectedDay + selectEdit
}

const save = (data) => {
    let editName = document.getElementById(`name${data}`).value
    let editImage = document.getElementById(`image${data}`).value
    let editDay = document.getElementById(`day${data}`).value
    activity[data].name = editName
    activity[data].image = editImage
    activity[data].day = editDay
    showContent()
    selectDays()
}

const cancel = () => {
    showContent()
    selectDays()
}