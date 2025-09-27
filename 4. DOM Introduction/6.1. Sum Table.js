function sumTable() {

    const rows = Array.from(document.querySelector('table').querySelectorAll('tr')).slice(1, -1);

    let sum = 0;
    for (let row of rows) {
        const col = row.children[row.children.length -1];
        sum += Number(col.textContent);
    }

    document.getElementById('sum').textContent = sum;

}