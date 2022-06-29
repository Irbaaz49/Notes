//getting add note button

const addNote = document.getElementById('addmore');


//creating addNotes function

const addNotes = (text = '') => {

    //Add button 

    //creating div elemnt through JS and adding 'notes' class to div element 

    const notes = document.createElement('div');

    notes.classList.add('notes');

    const HtmlData = `<div class="btns">
<button id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
<button id="delete"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div id="divtext"></div>
<textarea name="text" id="textarea" cols="30" rows="10">`;

    //inserting html data into the div element 

    notes.insertAdjacentHTML('afterbegin', HtmlData);



    //appending the inserted html data and the div to the body

    document.body.appendChild(notes);




    //Delete Button

    //Getting the delete btn from notes div  
    const deleBtn = notes.querySelector('#delete');

    // Adding event listener to btn and removing the child node from the body
    deleBtn.addEventListener('click', () => {
        document.body.removeChild(notes);
    })


    //Edit and save

    //getting edit btn and textarea 

    const editBtn = notes.querySelector('#edit');
    const textArea  = notes.querySelector('#textarea');
    const divText = notes.querySelector('#divtext')

let change = '';
textArea.addEventListener('change',(e)=>{
change = e.target.value;
})


editBtn.addEventListener('click',()=>{
    textArea.classList.toggle('hidden');
    divText.innerHTML = change;
})




}



//Adding event listember to addnote
addNote.addEventListener('click', () => addNotes())