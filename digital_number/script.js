let arr = [[],[],[]]

const showInit = () => {
    let show = ''
    for(let i=0; i<arr.length; i++){
        show += `<tr id=row${i}>`
        for(let j=0; j<arr[0].length; j++){
            show += `<td>`
            for(let k=0; k<arr[0][0].length; k++){
                show += `<b>${arr[i][j][k]}</b>`
            }
            show += `</td>`
        }
        show += '</tr>'
    }
    document.getElementById("content").innerHTML=show
}


const generateNumber = () => {
    arr = [[],[],[]]
    let input = document.getElementById("input").value
    let raw = input.split('')
    let top = []
    let mid = []
    let bot = []
    raw.forEach((value) => {
        if(value == 2 || value == 2 || value == 3 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9){
            top = ["&nbsp",'_',"&nbsp"]
        } else{
            top = ["&nbsp","&nbsp","&nbsp"]
        }
        if(value == 2 || value == 3 || value == 6){
            mid = ["&nbsp",'_','|']
        } else if(value == 4 || value == 8 || value == 9){
            mid = ['|','_','|']
        } else if(value == 1 || value == 7){
            mid = ["&nbsp","&nbsp",'|']
        } else if(value == 5){
            mid = ['|','_',"&nbsp"]
        } else{
            mid = ['|',"&nbsp",'|']
        }
        if(value == 0 ||  value == 6 || value == 8){
            bot = ['|','_','|']
        } else if(value == 1 || value == 4 || value == 7){
            bot = ["&nbsp","&nbsp",'|']
        } else if(value == 3 || value == 5 || value == 9){
            bot = ["&nbsp",'_','|']
        } else{
            bot = ['|','_',"&nbsp"]
        }
        arr[0].push(top)
        arr[1].push(mid)
        arr[2].push(bot)
    })
    console.log(arr)
    showInit()
}
