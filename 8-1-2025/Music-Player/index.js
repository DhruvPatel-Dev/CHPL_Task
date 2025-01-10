const prevButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const audio =  document.querySelector('#audio')
const img = document.querySelector('#img')
let track = 0;
const songsDetails = [
    {
        name:"1.mp3",
        image:'./public/image/1.jpg',
        song:'./public/audio/1.mp3'
    },
    {
        name:"2.mp3",
        image:'./public/image/2.jpg',
        song:'./public/audio/2.mp3'
    },
    {   
        name:"1.mp3",
        image:'./public/image/3.jpg',
        song:'./public/audio/3.mp3'

    }
]

prevButton.addEventListener('click',()=>{prevNextControl("prev")})
nextButton.addEventListener('click',()=>{prevNextControl("next")})

function prevNextControl (change)
{  
   let index = change=='prev'? -1 :+1
    img.src = songsDetails[(track+index)%3].image
    audio.src = songsDetails[(track+index)%3].song
    track = (track + index)%3
   
}