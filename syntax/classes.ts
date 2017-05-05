class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new Greeter('world');

// inheritance
class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    // default to be public
    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python');
sam.move();

// public/private/protected modifiers
class Employee {
    private name: string;
    constructor(name) { this.name = name; }
}
// new Employee('Bob').name; Error: private 'name' can only access with class

class Rhino extends Animal {
    constructor() { super('Rhino'); }
}
let animal = new Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');
animal = rhino;
// animal = employee; Error: 'Animal' and 'Employee' are not compatible because separate private 'name'

class Test1 {
    id: string;
    constructor(id) { this.id = id; }
}
class Test2 {
    id: string;
    constructor(id) { this.id = id; }
}
let test1 = new Test1('1');
let test2 = new Test2('2');
test1 = test2; // compatible because id is public

class Vehical {
    private type: string;
    protected name: string;
    constructor(name: string) {
        this.type = 'vehical';
        this.name = name;
    }
}
class Car extends Vehical {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    public getInfo() {
        return `A car named ${this.name} with id ${this.id}`;
    }
}
let car = new Car('Benz', 99527);
console.log(car.getInfo());
// console.log(car.name); protected 'name' can only access with base class or its subclass

class CannotInstantiate {
    protected constructor() {}
}
class CanInstantiate extends CannotInstantiate {
    private name: string;
    constructor(name) {
        super();
        this.name = name;
    }
}
// let aa = new CannotInstantiate(); Error: protected constructor cannot be instantiated
let bb = new CanInstantiate('bb');
