const buttons = document.querySelectorAll('.button')
const display = document.getElementsByClassName('display')[0]

buttons.forEach( button =>{
    button.addEventListener('click',()=>{evaluation(button)})
})
function evaluation(button){  
    if(button.innerText==='=')
        {
            try {
                display.value = eval(display.value)  
              } catch (error) {
                  display.value='e'
              }
        }
        else if(button.innerText==='DEL') display.value=display.value.substring(0,display.value.length-1)
        else if(button.innerText==='AC') display.value = ''
        else display.value+=button.innerText
}
