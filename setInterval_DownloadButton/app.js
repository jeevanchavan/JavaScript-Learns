// Day 45 Task

let counter = 0

let btn = document.querySelector('button')
let h3 = document.querySelector('h3')
let inner = document.querySelector('.inner')

btn.addEventListener('click', ()=>{

    btn.style.pointerEvents = 'none'

    let stop = setInterval(()=>{
        counter++
        h3.innerHTML = counter+'%'
        inner.style.width = counter+'%'

        console.log(counter)
    },50)

    setTimeout(()=>{
        clearInterval(stop)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = '0.6'
        
    },5000)
}) 