let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("score-home")


let scoreGuestEl = document.getElementById("score-guest")




function plus1Home(){
    scoreHome +=1
    scoreHomeEl.textContent = scoreHome    
}

function plus2Home(){
    scoreHome +=2
    scoreHomeEl.textContent = scoreHome    
}

function plus3Home(){
    scoreHome +=3
    scoreHomeEl.textContent = scoreHome    
}


function plus1Guest(){
    scoreGuest +=1
    scoreGuestEl.textContent = scoreGuest    
}

function plus2Guest(){
    scoreGuest +=2
    scoreGuestEl.textContent = scoreGuest  
}

function plus3Guest(){
    scoreGuest +=3
    scoreGuestEl.textContent = scoreGuest   
}

function newGame(){
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
    scoreHome = 0
    scoreGuest = 0
}

