let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = ['Jeevan is Great!','I am Batman.', 'Sheriyans Gos Mode', 'Winter is Coming', 'Trust the Process', 'Rohit Sharma Love', 'Life is Beautiful'];

btn.addEventListener('click',()=>{
    let h1 = document.createElement('h1')
    main.appendChild(h1)

    let a = Math.floor(Math.random()*arr.length)
    let x = Math.random()*80
    let y = Math.random()*80
    let rot = Math.random()*360
    let sca = Math.random()*3
    
    h1.innerHTML = arr[a]
    h1.style.color = 'white'
    h1.style.position = 'absolute'
    h1.style.top = x+'%'
    h1.style.left = y+'%'
    h1.style.rotate = rot+'deg'
    h1.style.scale = sca
    
})