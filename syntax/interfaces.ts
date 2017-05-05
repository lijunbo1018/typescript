interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// optional properties
interface SquareConfig {
    color?: string;
    width?: number;
    // [propName: string]: any;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = { color: 'transparent', area: 0 };
    if (config.color) {
        // newSquare.color = config.originColor; Error: originColor not exist
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black' });
mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
let squareOptions = { colour: 'red', width: 100 };
let square = createSquare(squareOptions);

// readonly
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; Error: can not assign to read-only property
let arr: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr;
// ro[0] = 2; Error
// ro.push(5); Error
// ro.length = 100; Error
// arr = ro; Error
arr = ro as number[];

// function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
// parameter type can be inferred
let yourSearch = <SearchFunc>function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// indexable types
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];

class Pet {
    name: string;
}
class Dog extends Pet {
    breed: string;
}
interface NotOkay {
    // [x: number]: Pet; Error: return type of numeric indexer must be subtype of type returned from string indexer
    [x: string]: Dog;
}
interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string; Error: type of 'name' is not a subtype of indexer
}
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myROArray: ReadonlyStringArray = ['Alice', 'Bob'];
// myROArray[2] = 'Mallory'; Error: indexer read-only

// class types
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

interface ClockConstructor {
    new (hour: number, minute: number): TickClockInterface;
}
// class Clock1 implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// } Error: no match for signature new (hour: number, minute: number)
interface TickClockInterface {
    tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): TickClockInterface {
    return new ctor(hour, minute);
}
class DigitalClock implements TickClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log('beep beep');
    }
}
class AnalogClock implements TickClockInterface {
    constructor(h: number, m: string) { }
    tick() {
        console.log('tick tock');
    }
}
let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 12, 17); Error: AnalogClock is incompatible with ClockConstructor

// extend interface
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
// let sq: Square = {} as Square;
let sq = <Square>{};
sq.color = 'blue';
sq.sideLength = 10;
sq.penWidth = 5.0;

// hybrid types
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;

// interfaces extending classes
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
// class Image implements SelectableControl{
//     select() {}
// } Error: 'state' is missing