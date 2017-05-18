interface Named {
    name: string;
}
let xNamed: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
xNamed = y;
function greet(n: Named) {
    console.log(`Hello, ${n.name}`);
}
greet(y);

// Comparing two functions
let foo = (a: number) => 0;
let bar = (b: number, s: string) => 0;
bar = foo;
// foo = bar; Error
let fun = () => ({ name: 'Alice' });
let baz = () => ({ name: 'Alice', location:' Seattle' });
fun = baz;
// baz = fun; Error

enum EventType {
    Mouse,
    Keyboard
}
interface Event {
    timestamp: number;
}
interface MouseEvent extends Event {
    xPoint: number;
    yPoint: number;
}
interface KeyEvent extends Event {
    keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: Event) => void) { }

listenEvent(EventType.Mouse, (e: MouseEvent) => {
    console.log(`${e.xPoint}, ${e.yPoint}`)
});
listenEvent(EventType.Mouse, (e: Event) => {
    console.log(`${(<MouseEvent>e).xPoint}, ${(<MouseEvent>e).yPoint}`)
});
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => {
    console.log(`${e.xPoint}, ${e.yPoint}`)
}));
// listenEvent(EventType.Keyboard, (e: number) => console.log(e)); Error

function invokeLater(args: any[], callback: (...args: any[]) => void) {}
invokeLater([1, 2], (x, y) => console.log(`${x}, ${y}`));
invokeLater(['1', '2'], (x?, y?) => console.log(`${x}, ${y}`));
invokeLater([], () => {});

// Enums
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };
let statusNow = Status.Ready;
statusNow = 1;
// statusNow = Color.Blue; Error
let color = 1;
color = Color.Green;

// Classes
class ClassA {
    property: number;
    constructor(property: number, attr: string) { }
}
class ClassB {
    static attr = 1;
    property: number;
    constructor() { }
}
class ClassC {
    property: number;
    constructor(property: number, private attr: string) { }
}
let ca: ClassA = new ClassA(5, 'a');
let cb: ClassB = new ClassB();
let cc: ClassC = new ClassC(5, 'c');
cb = ca;
ca = cb;
cb = cc;
// cc = ca; Error: private(protected) property 'attr' is missing

// Generics
interface Empty<T> { }
let ex: Empty<number> = {};
let ey: Empty<string> = {};
ex = ey;

interface NotEmpty<T> {
    data: T;
}
let nex: NotEmpty<number> = { data: 5 };
let ney: NotEmpty<string> = { data: '5' };
// nex = ney; Error

let f1 = function<T>(x: T): T { return x; }
let f2 = function<U>(y: U): U { return y; }
f1 = f2;

