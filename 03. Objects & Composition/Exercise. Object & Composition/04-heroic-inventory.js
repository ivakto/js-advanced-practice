function solve(heroData) {
    const heroRegister = [];

    for (const heroString of heroData) {

        const parts = heroString.split(' / ');
        const [name, levelStr, itemsStr] = parts;

        if (!name || !levelStr || name.trim() === '') {
            continue;
        }

        const level = Number(levelStr);

        if (isNaN(level)) {
            continue;
        }

        const items = itemsStr && itemsStr.trim() 
            ? itemsStr.split(', ')
            : [];

        const hero = { 
            name: name.trim(), 
            level, 
            items 
        };
        heroRegister.push(hero);
    }
    return JSON.stringify(heroRegister, null, 2);
}
