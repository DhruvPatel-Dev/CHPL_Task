const img = document.getElementsByTagName('img')
const btn = document.getElementsByTagName('button')
const images = [
    {
        name:'./image/1.png'
    },
    {
        name:'./image/2.png'
    },
    {
        name:'./image/3.png'
    },
    {
        name:'./image/4.png'
    },
    {
        name:'./image/5.png'
    },
    {
        name:'./image/6.png'
    },
]

btn[0].addEventListener('click',()=>{
    img[0].src = images[Math.floor(Math.random()*6)].name
})