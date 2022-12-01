
// 12. FAQ Collapse

// Important JS and CSS concepts for project

// 1. querySelectorAll()
// 2. forEach()
// 3. addEventListener('click')
// 4. .parentNode
// 5. .classList.toggle()

// 6. use UNI-CODE in content before and after
// 7. font-family: 'Font Awesome 5 Free'; for UNI-CODE

// ------------------------------------

// Pseudo code

// bring in toggle buttons (querySelectorAll)
// loop through nodelist (forEach)
// Add click event (addEventListener)
// Toggle the active class on the parent node (.parentNode & classList.toggle())

// variables

const openClose = document.querySelectorAll('.faq-toggle');

openClose.forEach(function(toggle) {   
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active');
    });
}); 

// parentNode because we want to change the status of parent of open/close buttons in HTML i.e. ".faq"
