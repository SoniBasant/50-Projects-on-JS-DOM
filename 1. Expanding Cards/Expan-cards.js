const panels=document.querySelectorAll('.panel') 
//without "All" querySelector select only first one

panels.forEach((panel) => { //add loop for each
    panel.addEventListener('click', () => { 
        //add event listener-> click
        removeActiveClasses()//to deactive panel previously active
        panel.classList.add('active')
    }) //but by only doing this don't deactive previously active one. SO
})
//here, we make a function to remove active class and
//place it before active
function removeActiveClasses() {
    panels.forEach(panel => { //loop through it
        panel.classList.remove('active')
    })
}

//add styles in style.css-> transition and delay