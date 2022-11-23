

// 9. Form Wave Animation

// Important concepts for the project



// variables

const labels = document.querySelectorAll('label');

// for the each label
labels.forEach(label => {
    // turn it into text
    label.innerHTML = label.innerText
        // use split method and made an array of letters
        .split('')
        // make that array into another array with span around each letters
        // add style to span for transition delay
        // also with dynamic time by multiplying index of the letter with 50 ms
        // time of animation can be increased by increasing multiplying time(in ms)
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        // join with empty string and make array a string
        .join('');
});
