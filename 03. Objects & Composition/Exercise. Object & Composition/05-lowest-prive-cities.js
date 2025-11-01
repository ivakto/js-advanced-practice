function findLowestPrices(input) {
    const productLowestPriceData = new Map();
    const uniqueProductOrder = [];

    for (const entry of input) {
        const parts = entry.split(' | ');
        const townName = parts[0];
        const productName = parts[1];
        const productPrice = Number(parts[2]);

        if (!productLowestPriceData.has(productName)) {
            productLowestPriceData.set(productName, {
                price: productPrice,
                townName: townName
            });
            uniqueProductOrder.push(productName);
        } else {
            // Продуктът съществува: Сравняваме цените
            const currentLowest = productLowestPriceData.get(productName);

            if (productPrice < currentLowest.price) {
                // Намерена е по-ниска цена, актуализираме данните
                productLowestPriceData.set(productName, {
                    price: productPrice,
                    townName: townName
                });
            }
            // Ако цената е равна (productPrice === currentLowest.price), не правим нищо.
            // Запазваме града, който вече е записан, защото той е въведен по-рано.
        }
    }

    // 2. Генериране на изхода в реда на първо въвеждане
    const result = [];
    for (const productName of uniqueProductOrder) {
        const lowestData = productLowestPriceData.get(productName);
        // Формат: {productName} -> {productLowestPrice} ({townName})
        result.push(`${productName} -> ${lowestData.price} (${lowestData.townName})`);
    }

    // Извеждане на резултата, като всеки елемент е на нов ред
    console.log(result.join('\n'));
}