function toggle() {
    const btnHTML = document.getElementsByClassName('button')[0];
    const extraText = document.getElementById('extra');

    if (btnHTML.textContent === 'More') {
        extraText.style.display = 'block';
        btnHTML.textContent = 'Less';
    } else {
        extraText.style.display = 'none';  
        btnHTML.textContent = 'More';
    }
}