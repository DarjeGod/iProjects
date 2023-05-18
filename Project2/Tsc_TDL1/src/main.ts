let addToDoButton = document.getElementById('addToDo') as HTMLButtonElement;
let toDoContainer = document.getElementById('toDoContainer') as HTMLDivElement;
let inputField = document.getElementById('inputField') as HTMLInputElement;

addToDoButton.addEventListener('click', function() {
    createToDo();
});

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        createToDo();
    }
});

function createToDo() {
    const inputValue = inputField.value.trim();
    if (inputValue !== '') {
        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputValue;
        toDoContainer.appendChild(paragraph);
        inputField.value = '';

        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = 'line-through';
        });

        paragraph.addEventListener('dblclick', function() {
            paragraph.style.textDecoration = 'line-through';
            toDoContainer.removeChild(paragraph);
        });
    }
}
