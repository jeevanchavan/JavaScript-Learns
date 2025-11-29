let main = document.querySelector('.main');
let cursor = document.querySelector("#cursor")

main.addEventListener('mousemove',(val)=>{
    cursor.style.left = val.x + 'px'
    cursor.style.top = val.y + 'px'
})