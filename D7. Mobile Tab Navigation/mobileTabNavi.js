
// 38. Mobile Tab Navigation

// Important concepts for the project

// 1. querySelectorAll()
// 2. forEach()
// 3. addEventListener('click')
// 4. classList.add()
// 5. classList.remove()

// variables

const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        // for each click, hide content and items
        // by removing show and active classes
        hideAllContents();
        hideAllItems();

        // add show and active classes on the clicked on
        item.classList.add('active');
        // get content through index of forEach loop
        // content will show which one is cliked
        contents[idx].classList.add('show');
    });
});

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'));
}