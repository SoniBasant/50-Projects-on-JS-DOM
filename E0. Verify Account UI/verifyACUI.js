
// 41. Verify Account UI

// Important concepts for the project

// 1. -webkit-outer-spin-button CSS pseudo-element to style input element
// 2. -webkit-inner-spin-button
// 3. querySelectorAll()
// 4. focus()
// 5. addEventListener('keydown')
// 6. if...else
// 7. setTimeout(function, time in ms)
// 8. element.style.borderColor
// 9. arrow function
// 10. forEach()
// 11. .value
// 12. @media

// variables

const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            // delete any previous value at the place by assigning its value to empty string
            codes[idx].value = '';
            // wait for 10ms then shift focus to next part
            setTimeout(() => codes[idx + 1].focus(), 10);
            // add border color for active code
            codes[idx].style.borderColor = '#3498db';
            // but if you make a mistake then correct it by pressing backspace
        } else if(e.key === 'Backspace') {
            // so if you press backspace, focus will shift to the previous place after 10ms
            setTimeout(() => codes[idx - 1].focus(), 10);
            // add border color for going back place
            if(idx === (codes.length -1)) {
                codes[idx].style.borderColor = '#f48004';
            }
            codes[idx].style.borderColor = '#f48004';            
        }
    });
});
