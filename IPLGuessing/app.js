let arr =[
    {
        team : 'CSK',
        primary : 'yellow',
        secondary : 'black',
        trophies : 5,
    },
    {
        team : 'MI',
        primary : 'blue',
        secondary : 'gold',
        trophies : 5,
    },
    {
        team : 'KKR',
        primary : 'purple',
        secondary : 'black',
        trophies : 3,
    },
    {
        team : 'SRH',
        primary : 'orange',
        secondary : 'black',
        trophies : 1,
    },
    {
        team : 'RCB',
        primary : 'red',
        secondary : 'black',
        trophies : 1,
    },
    {
        team : 'PBKS',
        primary : 'crimson',
        secondary : 'silver',
        trophies : 0,
    },
    {
        team : 'DC',
        primary : 'blue',
        secondary : 'red',
        trophies : 0,
    },
    {
        team : 'RR',
        primary : 'pink',
        secondary : 'silver',
        trophies : 1,
    },
]




let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let main = document.querySelector('main');

btn.addEventListener('click',()=>{
    let winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team;
    p.innerHTML = winner.trophies;
    p.style.backgroundColor = winner.primary;
    h1.style.backgroundColor = winner.primary;
    main.style.backgroundColor = winner.secondary; 
})