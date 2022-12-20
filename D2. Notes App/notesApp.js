
// 33. Notes App

// Important concepts for the project

// 1. getElementById()
// 2. localStorage, setItem, getItem
// 3. marked library from cdnjs
// 4. JSON.stringify
// 5. createElement()
// 6. classList add, toggle
// 7. template literals
// 8. querySelector
// 9. addEventListener() click, input 
// 10. forEach()
// 11. appendChild


// variables

const addBtn = document.getElementById('add');

// to fetch the content we stored in local storage
// sessionStorage can keep content while the screen remain open
const notes = JSON.parse(localStorage.getItem('notes'));
// console.log(notes);
if(notes) {
    notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // value with textarea > because it has some inputs
    textArea.value = text;

    // innerHTML with main > because it is a div
    main.innerHTML = marked(text);
    // using "marked" library here

    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLS();
        // update is necessary to add in delete button
        // otherwise content will come again and again
        // through local storage
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    })

    document.body.appendChild(note);
}

// update local storage
function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    // console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// localStorage.setItem('name', 'Brad');
// localStorage.getItem('name');
// can check name "Brad" at
// >> Application > Storage > Local Storage > Local Host>

// to remove
// localStorage.removeItem('name');
// ---------------------------------------------
// can only store string. If wanted to store an object/array
// it has to be stringified through
// JSON.stringify(object/array)
// localStorage.setItem('name', JSON.stringify());
// JSON.parse(localStorage.getItem('name'));

