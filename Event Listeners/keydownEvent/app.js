let body = document.body
let h2 = document.querySelector('h2')

body.addEventListener('keydown',(val)=>{
    h2.innerHTML = val.code
    
})