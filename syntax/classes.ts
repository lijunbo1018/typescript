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

// read-only properties
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(name) {
        this.name = name
    }
}
class Frog {
    readonly numberOfLegs: number = 4;
    constructor(readonly name: string) { }
}
let octopus = new Octopus('Octopus');
// octopus.name = 'aaa'; Error: 'name' is read-only
let frog = new Frog('Frog');
console.log(frog.name);

// accessors
let passcode = 'secret';
class Staff {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of staff!');
        }
    }
}
let staff = new Staff();
staff.fullName = 'Bob Smith';
if (staff.fullName) {
    console.log(staff.fullName);
}

// static property
class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// abstract class
abstract class Abstract {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earth...');
    }
}
// const ab = new Abstract(); Error: can not instantiate

abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log(`Department name: ${this.name}`);
    }
    abstract printMeeting(): void;
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating account reports...');
    }
}
let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); Error: method does not exist on declared abstract type

class Waiter {
    static standardGreeting = 'Hello, there';
    greeting: string;
    greet() {
        if (this.greeting) {
            return `Hello, ${this.greeting}`;
        } else {
            return Waiter.standardGreeting;
        }
    }
}
let waiter1: Waiter;
waiter1 = new Waiter();

let waiterMaker: typeof Waiter = Waiter;
console.log(waiterMaker.standardGreeting);

let waiter2: Waiter = new waiterMaker();
console.log(waiter2.greet());

// class as interface
class Point2d {
    x: number;
    y: number;
}

interface Point3d extends Point2d {
    z: number;
}
let point3d: Point3d = { x: 0, y: 0, z: 0 };