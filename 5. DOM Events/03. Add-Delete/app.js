function addItem() {
    // read input field
    const input = document.getElementById("newItemText");
    // if no content, do nothing
    if (!input.value) {
        return; // early exit
    }
    // create new list item
    const item = document.createElement('li');
    item.textContent = input.value;

    // create Delete button/ anchor
    // append to item
    // add functionality for deletion
    // whene delete is clicked:
    //-- from event target
    //-- select parent element
    // -- remove from DOM
    // populate list item with text
    const deleteBtn = document.createElement('a');
    deleteBtn.href = "#";
    deleteBtn.textContent = '[Delete]';
    item.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete)

    function onDelete(event) {
        const row = event.target.parentElement; // target - на това което е цъкнал потребителя
        row.remove();
    }

    const list = document.getElementById("items");
    // find list and append new list item
    list.appendChild(item);
    // clear input field
    input.value = '';
}
