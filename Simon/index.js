const allBoxes = document.querySelectorAll('.btn')
const buttonColours = ["red", "blue", "green", "yellow"];
const startBtn = document.getElementById('startBtn')
const levelStatus = document.getElementById('levelStatus')

let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


startBtn.addEventListener('click',startGame)

allBoxes.forEach(box =>{
  box.addEventListener('click',()=>boxClicked(box))
})

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(nextSequence,500);
      }
    } else {
        
       document.body.classList.add('game-over')
       levelStatus.innerText ='Game Over, Press Button to Restart' 
      setTimeout( ()=> {
       document.body.classList.remove('game-over')
      }, 500);
      restartGame();
    }
}
function nextSequence() {
  
  userClickedPattern = [];
  level++;
  levelStatus.innerHTML = `Level ${level}`
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour)
  
}
function animatePress(currentColor) {
  document.getElementById(`${currentColor}`).classList.add('pressed')
  setTimeout( ()=> {
   document.getElementById(`${currentColor}`).classList.remove('pressed')
  },100);
}
function restartGame() {
  level = 0;
  gamePattern = [];
  started = false;
}
function startGame(){
  if (!started) {
    levelStatus.innerText = `Level ${level}`
    nextSequence();
    started = true;
  }
}
function boxClicked(box)
{
  userClickedPattern.push(box.id);
  animatePress(box.id);
  checkAnswer(userClickedPattern.length-1);
}