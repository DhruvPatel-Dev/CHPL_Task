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

prevButton.addEventListener('click',()=>{
if(track==0)
{
 img.src = songsDetails[2].image
 audio.src=songsDetails[2].song
 track=2
}
else
{   
    img.src = songsDetails[track-1].image
    audio.src=songsDetails[track-1].song
    track-- 
}
})


nextButton.addEventListener('click',()=>{

    if(track==2)
    {
        img.src=songsDetails[0].image;
        audio.src=songsDetails[0].song;
        track=0
    }
    else
    {
        img.src=songsDetails[track+1].image;
        audio.src=songsDetails[track+1].song;
        track++
    }

})