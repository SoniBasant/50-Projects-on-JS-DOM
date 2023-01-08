
// 49. To Do List

// Important concepts for the project

// 1. getElementById()
// 2. JSON.parse
// 3. JSON.stringify
// 4. localStorage
// 5. get and set
// 6. forEach
// 7. addEventListener() > click, contextmenu, submit 
// 8. preventDefault()
// 9. classList > add, contains and toggle
// 10. createElement()
// 11. querySelectorAll()
// 12. appendChild()
// 13. forEach()

// variables

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

// to reload task after refresh
if(todos) {
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    // to prevent submitting form
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    // console.log(todoText);

    if(todoText) {
        const todoEl = document.createElement('li');
        // add line-through on completed task
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        // get the text from input
        todoEl.innerText = todoText;

        // for line-through > left click
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLocalStorage();
        });

        // to delete > right click
        todoEl.addEventListener('contextmenu', (e) => {
            // to prevent menu come after right click
            e.preventDefault();

            // remove task
            todoEl.remove();
            updateLocalStorage();
        })

        // add todo task in ul
        todosUL.appendChild(todoEl);

        // clear the input
        input.value = '';

        updateLocalStorage();
    }
}

function updateLocalStorage() {
    todosEl = document.querySelectorAll('li');

    // make an array
    const todos =[];

    // loop through each todo task
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}

// now to store task in local storage
// so that it doesn't get away when you refresh the page

// Browser Console > Application > Stroage
// in local storage, only string can be saved
// to save array/object we need to wrap them around
// JSON.stringify()
// and to extract data
// JSON.parse()
// to remove item
// localStorage.remove()

// localStorage.setItem('name', JSON.stringify(obj));
// JSON.parse(localStorage.getItem(obj));