class Car {
    constructor({ title }) {
        this.title = title
    }

    drive() {
        return 'vroom'
    }
}

class Toyota extends Car {

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Drive'});
toyota.honk();
toyota.drive();


///////// BAD ////////////////
// function Car(options) {
//     this.title = options.title;
// };
//
// Car.prototype.drive = function() {
//     return 'vroom';
// };
//
// const car = new Car({title: 'Focus'});
// car.drive();
// car;
//
// //Inheriting
//
// function Toyota(options) {
//     Car.call(this, options);
//     this.color.options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function() {
//     return 'beep';
// };
//
// const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
// toyota;

class Monster {
    constructor( { health, name }){
        this.health = health;
        this.name = name;
    }

}

const monster = new Monster({ health: 100, name: 'Sexy'});
monster.name;
monster.health;