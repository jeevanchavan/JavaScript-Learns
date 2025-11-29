let img = document.querySelector('.image img')
let love = document.querySelector('.card i')

img.addEventListener('click',()=>{
    
    love.style.opacity = 1
    love.style.transform = 'translate(-50%,-50%) scale(1.2) rotate(0deg)'

    setTimeout(()=>{
        love.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)'
    },800)

    setTimeout(()=>{
        love.style.opacity = 0
        // love.style.transform = 'translate(-50%,-50%) scale(0) rotate(0deg)'
    },1000)

    setTimeout(()=>{
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(0deg)'
    },1200)
})