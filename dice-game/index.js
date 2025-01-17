const img = document.getElementsByTagName('img')
const p1btn = document.getElementsByTagName('button')[0]
const p2btn = document.getElementsByTagName('button')[1]
const msg = document.getElementById('message')
let p1 
let p2
let flag=false
p1btn.addEventListener('click',()=>{rollTheDice(0)})
p2btn.addEventListener('click',()=>{rollTheDice(1)})

function rollTheDice(p)
{    
     let randomNumber = Math.floor(Math.random()*6)+1
     img[p].src = `./image/${randomNumber}.png`
    if(p==0)
    {
       p1btn.disabled=true
       p1=randomNumber
       if(flag)
        {
         showWinner(p1,p2)

        }
        flag=true
    }
    else
    {
        p2btn.disabled=true
        p2=randomNumber
        if(flag)
            {
             showWinner(p1,p2)
            }
            flag=true
        
    }
}

function showWinner(p1,p2)
{
    if(p1===p2)
    {
  msg.innerText='Draw!!!!'
    }
    else if(p1>p2)
    {
      msg.innerText='P1 Wins!!!'
    }
    else
    {
      msg.innerText='P2 Wins!!!!'
    }
    setTimeout(restartGame,2000)
}

function restartGame()
{
  flag = false
  p1=null
  p2=null
  img[0].src = `./image/1.png`
  img[1].src = `./image/1.png`
  msg.innerText=''

}


