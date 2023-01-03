
// 44. Custom Range Slider

// Important concepts for the project

// 1. getElementById()
// 2. addEventListener('input')
// 3. e.target > for range
// 4. nextElementSibling
// 5. getComputedStyle() > to return an object containing values of all CSS properties of element
// 6. getPropertyValue() > return a string containing value of specifies CSS property
// 7. substring > to extracts characters b/w two positions
// 8. .min and .max
// 9. scale() for conversion of one type of range to another
// map a range of numbers to another range of numbers

// variables
const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    // to change the value of position
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    // to return CSS property and string
    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    // change length (300px) to just 300
    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    // + sign for converting to num
    // max min to get 0 and 100
    const max = +e.target.max;
    const min = +e.target.min;

    // change left value on movement
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

    // reassign left style with px
    label.style.left = `${left}px`;

    label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }