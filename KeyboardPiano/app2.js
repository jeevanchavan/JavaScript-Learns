//  cleaner version of app.js

let body = document.querySelector("body")

let sounds = {
    "KeyC" : "24.mp3",
    "KeyD" : "29.mp3",
    "KeyE" : "36.mp3",
    "KeyF" : "41.mp3",
    "KeyG" : "48.mp3",
    "KeyA" : "53.mp3",
    "KeyB" : "60.mp3",
    "Digit1" : "64.mp3",
    "Digit2" : "65.mp3",
    "Digit3" : "69.mp3",
    "Digit4" : "72.mp3",
    "Digit5" : "77.mp3",
}

body.addEventListener('keydown',(val)=>{
    if(sounds[val.code]){
        let aud = new Audio('sounds/'+sounds[val.code])
        aud.play()
    }
})