// let h2 = document.querySelector('.title')

// h2.addEventListener('click',()=>{
//     let aud = new Audio("sounds/24.mp3")
//     aud.play()
// })

let body = document.querySelector('body')

// let keys = ['KeyC','KeyD','KeyE','KeyF','KeyG','KeyA','KeyB','KeyC#','KeyD#','KeyE#','KeyF#']

body.addEventListener('keydown',(val)=>{
    console.log(val);
    
    if(val.code == 'KeyC'){
        let aud = new Audio("sounds/24.mp3")
        aud.play()
    }
    if(val.code == 'KeyD'){
        let aud = new Audio("sounds/29.mp3")
        aud.play()
    }
    if(val.code == 'KeyE'){
        let aud = new Audio("sounds/36.mp3")
        aud.play()
    }
    if(val.code == 'KeyF'){
        let aud = new Audio("sounds/41.mp3")
        aud.play()
    }
    if(val.code == 'KeyG'){
        let aud = new Audio("sounds/48.mp3")
        aud.play()
    }
    if(val.code == 'KeyA'){
        let aud = new Audio("sounds/53.mp3")
        aud.play()
    }
    if(val.code == 'KeyB'){
        let aud = new Audio("sounds/60.mp3")
        aud.play()
    }
    if(val.code == 'Digit1'){
        let aud = new Audio("sounds/64.mp3")
        aud.play()
    }
    if(val.code == 'Digit2'){
        let aud = new Audio("sounds/65.mp3")
        aud.play()
    }
    if(val.code == 'Digit3'){
        let aud = new Audio("sounds/69.mp3")
        aud.play()
    }
    if(val.code == 'Digit4'){
        let aud = new Audio("sounds/72.mp3")
        aud.play()
    }
    if(val.code == 'Digit5'){
        let aud = new Audio("sounds/77.mp3")
        aud.play()
    }
})

// body.addEventListener('keydown',(val)=>{
//     keys.forEach((elem)=>{
//         if(val.code == keys[0]){
//             let aud = new Audio("sounds/24.mp3")
//             aud.play()
//         }
        
//     })
// })