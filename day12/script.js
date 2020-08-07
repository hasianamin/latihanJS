let dataUser = [
    {username:"administrator", pwd:"admin123", role:"admin"},
    {username:"hasian", pwd:"hasian123", role:"user"}
]

let dataActivity = [
    {activity:"lari", day:"Senin", poster:"lomba-lari.jpg"},
    {activity:"estafet", day:"Selasa", poster:"estafet.png"}    
]

let days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']

class User {
    constructor(_username, _pwd, _role){
        this.username = _username
        this.pwd = _pwd
        this.role = _role
    }
}

class Activities {
    constructor(_activity, _day, _poster){
        this.activity = _activity
        this.day = _day
        this.poster = _poster
    }
}

const beforeLogin = () => {
    document.getElementById('login').innerHTML = `<form onsubmit="login(event)">
                                                    Username: 
                                                    <input type="text" id="username">
                                                    <br>
                                                    <br>
                                                    Password:
                                                    <input type="password" id="pwd">
                                                    <br>
                                                    <br>
                                                    <input type="submit" value="Login">
                                                </form>`
    document.getElementById('content').innerHTML = ''
    document.getElementById('message').innerHTML = ''
}

beforeLogin()


const login = (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value
    let pwd = document.getElementById('pwd').value
    let login = dataUser.filter((value) => {
        return value.username == username && value.pwd == pwd
    })
    if(login.length){
        showActivity(login[0].role)
        document.getElementById('message').innerHTML = `<h1>${login[0].username}</h1>
        <input type='button' onclick='logout()' value='Logout'>`
    }else{
        document.getElementById('message').innerHTML = `<h1>password salah</h1>`
    }

}

const showActivity = (role) => {
    let acts = ''
    document.getElementById('username'). value =''
    document.getElementById('pwd'). value =''
    if(role == 'user'){
        dataActivity.forEach((value, index) => {
            acts += `<tr>
                    <td>${index + 1}</td>
                    <td>${value.activity}</td>
                    <td>${value.day}</td>
                    <td><img src='${value.poster}'></td>
                    <td></td>
                    </tr>`
        })
    }else{
        dataActivity.forEach((value, index) => {
            acts += `<tr id='row${index}'>
                    <td>${index + 1}</td>
                    <td>${value.activity}</td>
                    <td>${value.day}</td>
                    <td><img src='${value.poster}'></td>
                    <td><input type='button' value='Delete' onclick='deleteAct(${index})'></td>
                    <td><input type='button' value='Edit' onclick='editAct(${index})'></td>
                    </tr>`
        })
        acts += `<tr>
                <td></td>
                <td><input type='text' id='act'></td>
                <td>
                    <select id='day'>
                    </select>
                </td>
                <td><input type='text' id='poster'></td>
                <td colspan='2'><input type='button' onclick='addAct()' value='Add todo'></td>
                </tr>`        
    }
    document.getElementById('content').innerHTML = acts
    selectDay()
}

const selectDay = () => {
    let showDay = ''
    days.forEach((value) => {
        showDay += `<option value='${value}'>${value}</select>`
    })
    document.getElementById('day').innerHTML = showDay
}

const logout = () => {
    return beforeLogin()
}

const deleteAct = (data) => {
    let rowDelete = document.getElementById(`row${data}`)
    let deleteField = `<td>${data + 1}</td>
                    <td>${dataActivity[data].activity}</td>
                    <td>${dataActivity[data].day}</td>
                    <td><img src='${dataActivity[data].poster}'></td>
                    <td><input type='button' value='No' onclick='cancel()'></td>
                    <td><input type='button' value='Yes' onclick='confirmDelete(${data})'></td>`
    rowDelete.innerHTML = deleteField

}

const confirmDelete = (data) => {
    dataActivity.splice(data, 1)
    showActivity()
}

const editAct = (data) => {
    let rowEdit = document.getElementById(`row${data}`)
    let editField = `<td>${data + 1}</td>
                    <td><input type='text' id='editAct${data}' value='${dataActivity[data].activity}'></td>
                    <td><select id=day${data}></select></td>
                    <td><input type='text' id='editPoster${data}' value='${dataActivity[data].poster}'></td>
                    <td><input type='button' value='Cancel' onclick='cancel()'></td>
                    <td><input type='button' value='Save' onclick='saveEdit(${data})'></td>`
    rowEdit.innerHTML = editField
    let selectedDayEdit = ''
    let selectedDay = `<option value='${dataActivity[data].day}'>${dataActivity[data].day}</option>`
    let res = days.filter((value) => {
        return value != dataActivity[data].day
    })
    res.forEach((value) => {
        selectedDayEdit += `<option value='${value}'>${value}</option>`
    })
    document.getElementById(`day${data}`).innerHTML = selectedDay + selectedDayEdit
    selectDay()
}

const saveEdit = (data) => {
    let editAct = document.getElementById(`editAct${data}`).value
    let editDay = document.getElementById(`editDay${data}`).value
    let editPoster = document.getElementById(`editPoster${data}`).value
    dataActivity[data].activity = editAct
    dataActivity[data].day = editDay
    dataActivity[data].poster = editPoster
    return showActivity()
}

const addAct = () => {
    let inputAct = document.getElementById('act').value
    let inputDay = document.getElementById('day').value
    let inputPoster = document.getElementById('poster').value
    let input = new Activities(inputAct, inputDay, inputPoster)
    dataActivity.push(input)
    return showActivity()
}

const cancel = () => {
    return showActivity()
}