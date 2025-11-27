let btn = document.querySelector("button");
let box = document.querySelector(".box");

btn.addEventListener('click', ()=>{
    let b1 = Math.floor(Math.random()*256)
    let b2 = Math.floor(Math.random()*256)
    let b3 = Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${b1},${b2},${b3})`
    
})