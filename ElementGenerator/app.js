let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click',()=>{
    let div = document.createElement('div');
    main.appendChild(div)

    let x = Math.random()*100
    let y = Math.random()*100
    let z = Math.random()*10
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    div.style.position = 'absolute'
    div.style.height = '50px'
    div.style.width = '50px'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.bottom = z+'%'

    console.log(div);
    
})