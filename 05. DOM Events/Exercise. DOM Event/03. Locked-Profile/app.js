function lockedProfile() {
    const buttonArr = Array.from(document.querySelectorAll('button'));

    for (let button of buttonArr) {
        button.addEventListener('click', onClick);

        function onClick(event) {
            const btn = event.target;
            const card = btn.parentElement;

            const profileState = document.querySelector("input[type='radio']:checked").value;
            const moreInfoDiv = card.querySelector('div');

            if (profileState === 'Lock') {
                return;
            }
        }
    }
}