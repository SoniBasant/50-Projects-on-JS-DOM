
// 14. Animated Navigation

// Important Concepts for the project

// 1. getElementById()
// 2. addEventListener('click')
// 3. classList.toggle()
// 4. translateY()
// 5. rotate()

// variables

const toggle = document.getElementById('toggle');
const navigation = document.getElementById('nav');

// change style on click event

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
