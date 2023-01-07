

// 13. Random Choice Picker

// Important concepts for the project

// 1. getElementById()
// 2. element.focus()
// 3. addEventListener('keyup')
// 4. Event.target.value -> to return the value of Event
// 5. setTimeout() -> to prevent a function from running
// 6. split() -> to splits a string into an array of substrings
// 7. filter() -> creates a shallow copy of a portion of a given array with elements that pass a test
// 8. trim() -> remove white space from both sides of a string
// 9. map() -> create a new array from calling a function for every array elements
// 10. forEach()
// 11. document.createElement()
// 12. classList.add
// 13. classList.remove()
// 14. setInterval() -> calls a function at specified intervals in ms 
// 15. clearInterval() -> to clears a timer set with setInterval() method 
// 16. querySelectorAll()
// 17. Math.floor()
// 18. Math.random()
// 19. appendChild()


// variables

const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// for automatically put cursor at textarea
textarea.focus();

// on event

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10)
    }
    randomSelect(); 
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim());
    // split by comma then filter the array for white space and manipulate it all with map
    // so can't be an empty string and contain white space

    tagsElement.innerHTML = '';
    // clear tag element so input doesn't pileup
    
    tags.forEach(tag => {
        // create a new element for each tags, split with comma
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsElement.appendChild(tagEl);
    }) 
}

// to clear input after hitting enter key

function randomSelect() {
    // to run color jumping for 30 times
    const times = 30;

    // set interval of 100ms for function 'pickRandomTag'
    const interval = setInterval(() => {
        // for highlighting
        const randomTag = pickRandomTag();
        
        // to remove undefined entry
        if(randomTag !== undefined) {

            highlightTag(randomTag);
    
            // for unhighlighting
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    // for stopping and picking a random tag to land on highlight
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 100)
    }, times * 100);
}

// for random selection
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// for highlighting

function highlightTag(tag) {
    tag.classList.add('highlight')
}

// for removing highlighting

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
