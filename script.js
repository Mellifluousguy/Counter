let number = document.querySelector('#number');
const Dec = document.querySelector('#Dec');
const reset = document.querySelector("#reset");
const Add = document.querySelector('#Add');
const body = document.querySelector('body');
let vara = 0;
// Function for Adding Number
Add.addEventListener('click', function () {
    number.textContent = vara++;
    // return vara;
    colors;
})
Dec.addEventListener('click', () => {
    if (number.textContent == 0) {
        alert('Max Limit Exceed');
    }
    else {
        vara--;
        number.textContent = vara;
    }
    colors();
})
reset.addEventListener('click', () => {
    vara = 0;
    number.textContent = vara;
    colors();
})