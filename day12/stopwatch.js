let seconds = 00
let tens = 00
let minutes = 00
let hours = 00
let days = 00
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let appendMinutes = document.getElementById("minutes")
let appendHours = document.getElementById("hours")
let appendDays = document.getElementById("days")
let buttonStart = document.getElementById("start-btn")
let buttonStop = document.getElementById("stop-btn")
let buttonReset = document.getElementById("reset-btn")
let interval

const startTime = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

const stopTime = () => {
    clearInterval(interval)
}

const resetTime = () => {
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
}

const startTimer = () => {
    tens++
    if(tens < 9){
        appendTens.innerHTML = "0" + tens
    }

    if(tens > 9){
        appendTens.innerHTML = tens
    }

    if(tens > 99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = "0" + 0
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }

    if(seconds > 59){
        minutes++
        appendMinutes.innerHTML = "0" + minutes
        seconds = 0
        appendSeconds.innerHTML = "0" + 0
    }

    if(minutes > 9){
        appendMinutes.innerHTML = minutes
    }

    if(minutes > 59){
        hours++
        appendHours.innerHTML = "0" + hours
        minutes = 0
        appendMinutes.innerHTML = "0" + 0
    }

    if(hours > 9){
        appendHours.innerHTML = hours
    }

    if(hours > 23){
        days++
        appendDays.innerHTML = "0" + days
        hours = 0
        appendHours.innerHTML = "0" + 0
    }

    if(days > 9){
        appendDays.innerHTML = days
    }
}