
// 21. Drag and drop

// Important concepts for the project

// 1. querySelector()
// 2. querySelectorAll()
// 3. addEventListener() 
//    dragStart, dragend, dragover, dragenter, dragleave, drop 
// 4. .className to set the class attribute
// 5. setTimeout()
// 6. preventDefault()
// 7. append

// variables 
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// functions of drag

function dragStart() {
    // add style of hold on img
    this.className +=' hold';
    // add style of invisible on the place from where img is taken 
    setTimeout(() => this.className = 'invisible', 0);
    // but even after putting img back, this class is there
    // so we can't see the img
}

function dragEnd() {
    // so when drag ends, give the class of 'fill'
    this.className = 'fill';
}

function dragOver(e) {
    // default action
    // reset the current drag operation to 'none'
    // to prevent it
    e.preventDefault();
}

function dragEnter(e) {
    // default action
    // reject the immediate user selection as the potential target element
    // to prevent it
    e.preventDefault();

    // add the class of 'hovered' in 'fill'
    // so the box will have the style of fill on drag enter
    this.className += ' hovered';
    // but this style remain
}

function dragLeave() {
    // remove the hovered class from the box on drag leave
    this.className += 'empty';
}

// to drop the img at any box
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
