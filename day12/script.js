let dataUser = [
    {username:"administrator", pwd:"admin123", role:"admin"},
    {username:"hasian", pwd:"hasian123", role:"user"}
]

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

const login = (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value
    let pwd = document.getElementById('pwd').value
    let login = dataUser.filter((value) => {
        return value.username == username && value.pwd == pwd
    })
    if(login.length){
        alert('welcome ' + login[0].username)
    }else{
        alert('failed login')
    }

}
