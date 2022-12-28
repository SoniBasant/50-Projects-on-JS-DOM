
// 39. Password Strength Background

// Important concepts for the project

// 1. tailwind CSS framework
// 2. addEventListener('input')
// 3. e.target.value
// 4. element.style.filter
// 5. template literals
// 6. getElementById()

// variables

password = document.getElementById('password');
background = document.getElementById('background');

// as margin is -20px and 20 digit password
// is too long, we will short it by 
// multiply each digit of password by 2
// so we only need 10 digits

password.addEventListener('input', (e) => {
    // event here because we need value
    const input = e.target.value;
    // console.log(input);
    const length = input.length;
    // console.log(length);
    const blurValue = 20 - length * 2;
    // console.log(blurValue);
    background.style.filter = `blur(${blurValue}px)`;
});