let boardValue = [[,,],[,,],[,,]]
let raw, row, col
let count = 0
const boardInit = () => {
    let board=''
    for(let i=0; i<boardValue.length; i++){
        board += `<tr id="row${i}">`
        for(let j=0; j<boardValue.length; j++){
            board += `<td id="col${j}"><img src="block.png" id="row${i},col${j}" onclick="clicked(this.id)"></td>`
        }
        board += `</tr>`
    }
    document.getElementById("board").innerHTML=board
    document.getElementById("message").innerHTML="Player1 Turn (x)"
    document.getElementById("notification").innerHTML = ""
    foundWin = false
}
boardInit()


const clicked = (input) => {
    if(count % 2 == 0){
        turn(1,'x',input)
    } else{
        turn(0,'o',input)
    }
    count += 1
}

const turn = (player, stat, input) => {
    if(!foundWin){
        raw = input.match(/[0-9]/g)
        row = parseInt(raw[0])
        col = parseInt(raw[1])
        if(!boardValue[row][col]){
            let a
            stat == 'o'? a = 'x' : a = 'o'
            document.getElementById("message").innerHTML = `<p>Player${player+1} Turn (${a})</p>`
            document.getElementById(input).src = `${stat}.png`
            boardValue[row][col] = `${stat}`
        } else{
            alert("invalid movement")
            count -= 1
        }
        winCondition(count)
    } else{
        boardInit()
        count = -1
    }
}

const winCondition = (running) => {
    if(running > 3){
        for(let i=0; i<3; i++){
            if(boardValue[i][0] == boardValue[i][1] && boardValue[i][1] == boardValue[i][2] && boardValue[i][2] == boardValue[i][0]){
                if(boardValue[i][0] == 'x'){
                    msgWinner('1')
                } else if(boardValue[i][0] == 'o'){
                    msgWinner('2')
                }
            }
        }
        for(let i=0; i<3; i++){
            if(boardValue[0][i] == boardValue[1][i] && boardValue[1][i] == boardValue[2][i] && boardValue[2][i] == boardValue[0][i]){
                if(boardValue[0][i] == 'x'){
                    msgWinner('1')
                } else if(boardValue[0][i] == 'o'){
                    msgWinner('2')
                }
            }
        }
        if(boardValue[0][0] == boardValue[1][1] && boardValue[1][1] == boardValue[2][2] && boardValue[2][2] == boardValue[0][0]){
            if(boardValue[0][0] == 'x'){
                msgWinner('1')
            } else if(boardValue[0][0] == 'o'){
                msgWinner('2')
            }
        }
        if(boardValue[0][2] == boardValue[1][1] && boardValue[1][1] == boardValue[2][0] && boardValue[2][0] == boardValue[0][2]){
            if(boardValue[0][2] == 'x'){
                msgWinner('1')
            } else if(boardValue[0][2] == 'o'){
                msgWinner('2')
            }
        }
    }
    if(running > 7 && !foundWin){
        document.getElementById("notification").innerHTML = "Draw"
        foundWin = true
        boardValue = [[,,],[,,],[,,]]
    }
}

const msgWinner = (p) => {
    document.getElementById("notification").innerHTML = `player${p} Win`
    document.getElementById("message").innerHTML = `<p>Player${p} Turn (x)</p>`
    boardValue = [[,,],[,,],[,,]]
    foundWin = true
}

