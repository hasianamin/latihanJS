let dataBase = [{name : "Hasian", age : 25, gender : "Pria", job : "Web Developer"},
{name : "Bobi", age : 26, gender : "Pria", job : "Arsitek"},
{name : "Susan", age : 23, gender : "Wanita", job : "Koki"}]

let job = ['Koki', 'Arsitek', 'Developer']

let showSort = dataBase.map((value) => {
    return value
})

class Human {
    constructor(_name, _age, _gender, _job){
        this.name = _name
        this.age = _age
        this.gender = _gender
        this.job = _job
    }
}

let gender

const getGender = (value) => {
    gender = value
}

const showJob = () => {
    let sortJob = job.sort()
    let show = ''
    sortJob.forEach((value) => {
        show += `<option value=${value}>${value}</option>`
    })
    document.getElementById("job").innerHTML = show
}
showJob()

const inputData = () => {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let job = document.getElementById("job").value
    if(name && age && job){
        let newHuman = new Human(name, age, gender, job)
        dataBase.push(newHuman)
    }
    showSort = dataBase.map((value) => {
        return value
    })
    showData(1)
}

const showData = (val) => {
    if(val == 1){
        showAll = dataBase.map((value, index) => {
            return `<tr>
            <td>${index + 1}</td>
            <td>${value.name}</td>
            <td>${value.age}</td>
            <td>${value.gender}</td>
            <td>${value.job}</td>
            </tr>`
        })
    } else{
        showAll = showSort.map((value, index) => {
            return `<tr>
            <td>${index + 1}</td>
            <td>${value.name}</td>
            <td>${value.age}</td>
            <td>${value.gender}</td>
            <td>${value.job}</td>
            </tr>`
        })
    }
    document.getElementById("content").innerHTML = showAll.join('')
}
showData(1)

const bubbleSort = (arr, props) => {
    let temp
    for(let i = arr.length-1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j][props] > arr[j+1][props]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    showData(2)
}