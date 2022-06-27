// #202124
const addmore = document.getElementById('addmore');


const addNote = (text = '')=>{

const note = document.createElement('div')
note.classList.add('note');

const htmlData = `<div class="btns">
<button id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
<button id="delete"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div id="divtext"></div>
<textarea name="text" id="textarea" cols="30" rows="10"></textarea>`;

note.insertAdjacentHTML('afterbegin',htmlData);


const edit = note.querySelector('#edit');
const DelteBtn = note.querySelector('#delete');
const textarea = note.querySelector('#textarea');
const main = note.querySelector('#divtxt');




//deleting the note
DelteBtn.addEventListener('click',function(){
    note.remove();
})










document.body.appendChild(note);
//appends the node as the last child of a node
}
addmore.addEventListener('click', ()=>addNote());