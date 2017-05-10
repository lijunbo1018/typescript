// without generic
function any(arg: any): any {
    return arg;
}
let num: number = any('test');

function identity<T>(arg: T): T {
    return arg;
}
let o1 = identity<string>('myString');
// argument inference
let o2 = identity('myString');
// let oo1: number = o1; Error: can not assign 'string' to 'number'
// let oo2: number = o2; Error: can not assign 'string' to 'number'

function loggingIdentityW<T>(arg: T): T {
    // console.log(arg.length); Error: length does not exist on type 'T'
    return arg;
}
function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
loggingIdentity1<number>([1, 2, 3]);
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
loggingIdentity2(['1', '2', '3']);
loggingIdentity2<number[]>([[1, 2, 3], [4, 5]]);

// Generic Types
let myIdentity: <T>(arg: T) => T = identity;
let yourIdentity: {<U>(arg: U): U} = identity;
interface GenericIdentityFn1 {
    <T>(arg: T): T;
}
let herIdentity: GenericIdentityFn1 = identity;
herIdentity = function (str: string): string {
    return str;
}
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let hisIdentity: GenericIdentityFn2<number> = identity;
// hisIdentity = function (str: string): string { return ''; }; Error: incompatible

// Generic Classes
class GenericType<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let genericNumber = new GenericType<number>();
genericNumber.zeroValue = 0;
genericNumber.add = (x, y) => x + y;

let genericString = new GenericType<string>();
genericString.zeroValue = '0';
genericString.add = (x, y) => x + y;
console.log(genericString.add(genericString.zeroValue, '07'));