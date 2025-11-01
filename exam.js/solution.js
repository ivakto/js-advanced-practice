window.addEventListener("load", solve);

function solve() {

    const locationInput = document.getElementById('location');
    const areaInput = document.getElementById('area');
    const yearInput = document.getElementById('year');
    const typeSelect = document.getElementById('type');
    const pricePerSqmInput = document.getElementById('price-per-sqm');
    const expectedProfitInput = document.getElementById('expected-profit');
    const publishButton = document.getElementById('publish');
    const tableBody = document.getElementById('table-body');
    const propertyList = document.getElementById('property-list');
    const profitStrong = document.getElementById('profit');

    let totalProfit = 0;

    publishButton.addEventListener('click', (e) => {
        e.preventDefault(); 

        const location = locationInput.value.trim();
        const area = Number(areaInput.value.trim());
        const year = Number(yearInput.value.trim());
        const type = typeSelect.value;
        const pricePerSqm = Number(pricePerSqmInput.value.trim());
        const expectedProfit = Number(expectedProfitInput.value.trim());

        if (!location || !area || !year || type === 'Type' || !pricePerSqm || !expectedProfit) {
            return;
        }

        const price = area * pricePerSqm;
        const profitAmount = price * (expectedProfit / 100);
        const newPrice = price + profitAmount;
        const formattedPrice = price.toFixed(2);
        const formattedNewPrice = newPrice.toFixed(2);
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${location}</td>
            <td>${area}</td>
            <td>${year}</td>
            <td>${type}</td>
            <td>${formattedPrice}</td>
            <td>${formattedNewPrice}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="sell-btn">Sell</button>
            </td>
        `;

        tableBody.appendChild(tr);

        locationInput.value = '';
        areaInput.value = '';
        yearInput.value = '';
        typeSelect.value = 'Type';
        pricePerSqmInput.value = '';
        expectedProfitInput.value = '';

        const editButton = tr.querySelector('.edit-btn');
        const sellButton = tr.querySelector('.sell-btn');

        editButton.addEventListener('click', () => {
            const [
                trLocation,
                trArea,
                trYear,
                trType,
                trPrice, 
                trNewPrice 
            ] = Array.from(tr.children).map(td => td.textContent);

            locationInput.value = trLocation;
            areaInput.value = trArea;
            yearInput.value = trYear;
            typeSelect.value = trType;

            locationInput.value = location;
            areaInput.value = area;
            yearInput.value = year;
            typeSelect.value = type;
            pricePerSqmInput.value = pricePerSqm;
            expectedProfitInput.value = expectedProfit;


            tr.remove();
        });

        sellButton.addEventListener('click', () => {
            tr.remove();
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${location} - ${type}</span>
                <span>${year}</span>
                <span>${profitAmount.toFixed(2)}</span>
            `;

            propertyList.appendChild(li);

            totalProfit += profitAmount;
            profitStrong.textContent = totalProfit.toFixed(2);
        });

    });
}


