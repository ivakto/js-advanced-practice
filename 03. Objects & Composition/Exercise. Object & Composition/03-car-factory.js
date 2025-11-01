function solve(order) {
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    function selectEngine(minPower) {
        if (minPower <= 90) {
            return engines.small;
        } else if (minPower <= 120) {
            return engines.normal;
        } else {
            return engines.monster;
        }
    }

    function selectWheels(wheelsize) {
        let diameter = Math.floor(wheelsize);
        if (diameter % 2 === 0) {
            diameter -= 1;
        }
        return [diameter, diameter, diameter, diameter];
    }

    const assembledCar = {};

    assembledCar.model = order.model;
    assembledCar.engine = selectEngine(order.power);
    assembledCar.carriage = {
        type: order.carriage,
        color: order.color
    };
    assembledCar.wheels = selectWheels(order.wheelsize);

    return assembledCar;
}
