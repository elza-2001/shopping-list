/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    const inputText = sendInput.value;

    const newItem = document.createElement('div');
    newItem.classList.add('items');

    if (event.key == 'Enter') {
        newItem.textContent = inputText;
        input.value = '';
    };

    if (inputText != '') {
        itemsContainer.append(newItem);
    }

    newItem.addEventListener('click', function (){
        newItem.classList.toggle('done');
    });
});




