function attachEventsListeners() {
    // Коефициентите за преобразуване към секунди (Обект за Търсене)
    const conversionRates = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    };

    // Дефинираме всички input полета в един обект за лесен достъп
    const inputFields = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    // Селектираме всички бутони
    const buttonsArray = [
        document.getElementById('daysBtn'),
        document.getElementById('hoursBtn'),
        document.getElementById('minutesBtn'),
        document.getElementById('secondsBtn')
    ];

    // Прикачваме слушател към всеки бутон
    for (let button of buttonsArray) {
        button.addEventListener('click', function() {
            // 1. Идентифицираме входната единица и четем стойността
            const inputId = button.id.slice(0, -3); // Премахваме 'Btn'
            const inputValue = Number(inputFields[inputId].value); // Четем стойността от inputFields

            // 2. Преобразуване към Базова Единица (Секунди)
            const valueInSeconds = inputValue * conversionRates[inputId];

            // 3. Преобразуване Обратно и Записване във ВСИЧКИ полета
            inputFields.days.value = valueInSeconds / conversionRates.days;
            inputFields.hours.value = valueInSeconds / conversionRates.hours;
            inputFields.minutes.value = valueInSeconds / conversionRates.minutes;
            inputFields.seconds.value = valueInSeconds; // Секундите остават непроменени
        });
    }
}