let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("score-home")


let scoreGuestEl = document.getElementById("score-guest")


function plus1Home(){
    scoreHome +=1
    scoreHomeEl.textContent = scoreHome    
}

window.plus1Home = plus1Home


function plus2Home(){
    scoreHome +=2
    scoreHomeEl.textContent = scoreHome    
}

window.plus2Home = plus2Home

function plus3Home(){
    scoreHome +=3
    scoreHomeEl.textContent = scoreHome    
}

window.plus3Home = plus3Home 

function plus1Guest(){
    scoreGuest +=1
    scoreGuestEl.textContent = scoreGuest    
}

window.plus1Guest = plus1Guest

function plus2Guest(){
    scoreGuest +=2
    scoreGuestEl.textContent = scoreGuest  
}

window.plus2Guest = plus2Guest

function plus3Guest(){
    scoreGuest +=3
    scoreGuestEl.textContent = scoreGuest   
}

window.plus3Guest = plus3Guest

function newGame(){
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
    scoreHome = 0
    scoreGuest = 0
}

window.newGame = newGame
