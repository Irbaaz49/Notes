//getting add note button

const addNote = document.getElementById('addmore');



//localStorsge
const updateLS = () => {

    //getting all the textareas added using addnote btn
    const textAreas = document.querySelectorAll('textarea');

    const Notes = [];
    textAreas.forEach((addedNote) => {

        return Notes.push(addedNote.value);

    })
    localStorage.setItem('TheKeyNote', JSON.stringify(Notes));

}



//creating addNotes function

const addNotes = (text='') => {

    //Add button 

    //creating div elemnt through JS and adding 'notes' class to div element 

    const notes = document.createElement('div');

    notes.classList.add('notes');

    const HtmlData = `<div class="btns">
<button id="edit" title="edit/save" ><i class="fa-solid fa-pen-to-square"></i></button>
<button id="delete" title="delete" ><i class="fa-solid fa-trash-can"></i></button>
<button id="complete" title="completed" ><i class="fa-solid fa-check"></i></button>

</div>
<div id="divtext" class ="main ${text ? "" : "hidden"}">${text}</div>
<textarea name="text" class="${text ? "hidden" : ""}" id="textarea" cols="30" rows="10">${text}</textarea>`;

    //inserting html data into the div element 

    notes.insertAdjacentHTML('afterbegin', HtmlData);







    //Delete Button

    //Getting the delete btn from notes div  
    const deleBtn = notes.querySelector('#delete');

    // Adding event listener to btn and removing the child node from the body
    deleBtn.addEventListener('click', () => {
        notes.remove();
        updateLS();
    })


    //Edit and save

    //getting edit btn and textarea 

    const editBtn = notes.querySelector('#edit');
    const textArea = notes.querySelector('#textarea');
    const divText = notes.querySelector('#divtext')

    editBtn.addEventListener('click', () => {
        divText.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    divText.classList.remove('strike');

    })

    textArea.addEventListener('change', (e) => {

        const value = e.target.value;

        divText.innerHTML = value;

        updateLS();
    })


//completed btn 
const completed = notes.querySelector('#complete');
completed.addEventListener('click',()=>{
    divText.classList.toggle('strike');
})



    //appending the inserted html data and the div to the body

    document.body.appendChild(notes);
}


//getting local storage 
const Finalnotes = JSON.parse(localStorage.getItem('TheKeyNote'));


// if notes are present(true) then displaying the note, and passing an parameter in the addNotes() function 'text' = ele
if(Finalnotes){
    Finalnotes.forEach((ele)=>{
        console.log(ele);
        addNotes(ele);
    })
}


//Adding event listember to addnote
addNote.addEventListener('click', () => addNotes())