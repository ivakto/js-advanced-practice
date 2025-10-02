function deleteByEmail() {
    // read input field
    const input = document.getElementsByName('email')[0];
    const pattern = input.value.trim();
    // scan table rows
    const rows = Array.from(document.querySelector('tbody').children);
    // compare text of second colum with input value
    let found = false; 

    for (let row of rows) {
        const childrenRef = row.children[1];
        if (childrenRef.textContent === pattern) {
            row.remove();
            found = true;
        }
    }
    // if a row was deleted -> print Deleted
    // otherwise -> print Not found
    const output = document.getElementById('result');
    if (found) {
        output.textContent = 'Deleted.';
        input.value = '';
    } else {
        output.textContent = 'Not found.';
    }
    
    // clear input fiels
    
}