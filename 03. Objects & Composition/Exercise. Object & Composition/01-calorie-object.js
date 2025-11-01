function solve (input) {

    let obj = {};

    for (let i = 0; i <= input.length - 1; i++) {
        if (i % 2 == 0) {
            let key = input[i];
            let value = Number(input[i+1]);
            obj[key] =  value;
        }
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);