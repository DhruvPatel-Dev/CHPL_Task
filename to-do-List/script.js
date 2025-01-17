const addBtn = document.getElementById('add')
const input = document.getElementById('new-task')
const tasks = document.getElementById('tasks')
const notes =[]


addBtn.addEventListener('click',addNote)

function addNote()
{
 if(input.value!=='')
 {  notes.push(input.value)
    input.value=""
    showNote()
 }

}
function showNote()
{   
   let newHtml=""
    notes.forEach((note,id)=>{
       newHtml+=`
        <div class= 'notes' id=${id}>
        <p >${note}</p>
        <button class ='editbtn'  onClick="editNote(${id})">Edit</button>
        <button class='deletebtn' onClick="deleteNote(${id})">Delete</button>
          </div>         `
    })
    tasks.innerHTML=newHtml
}
function deleteNote(index)
{ 
 if(notes.length!==1) notes.splice(index,1)
 notes.pop()
 let deleteEle = document.getElementById(index)
 deleteEle.remove()
}
function editNote(index)
{ 
   const note = document.getElementById(index)
   input.value = note.childNodes[1].innerText
   deleteNote(index)
}
