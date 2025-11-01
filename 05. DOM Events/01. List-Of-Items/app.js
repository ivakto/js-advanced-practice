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
    // populate list item with text
     const list = document.getElementById("items");
    // find list and append new list item
     list.appendChild(item);
    // clear input field
    input.value = '';
}