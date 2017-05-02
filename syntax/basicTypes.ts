// Boolean
let isDone: boolean = true;
// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// String
let fullName: string = 'Li Junbo';
let age: number = 27;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${ age + 1 } years old next year.`;
// Array
let numList: number[] = [1, 2, 3];
let strList: Array<string> = ['1', '2', '3'];
// Tuple
let tuple: [string, number];
tuple = ['hello', 10];
// tuple = [10, 'hello']; Error
console.log(tuple[0].substr(1));
tuple[3] = 'world';
// tuple[4] = true; Error, 'boolean' isn't 'string | number'
// Enum
enum Color {Red = 1, Green, Blue}
let color: Color = Color.Green;
let colorName: string = Color[4] || Color[color];
console.log(colorName);
// Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
let list: any[] = [1, true, 'free'];
// Void
function warnUser(): void {
    alert('This is warning message');
}
// Null and Undefined
let u: undefined = undefined;
let n: null = null;
// let a: number = n; Error when use --strictNullChecks flag; Use union instead
// Never
function error(message: string): never {
    throw new Error(message);
}
// Type assertions
let someValue: any = 'this is a string';
// let strLength: number = (<string>someValue).length; not allowed in JSX
let strLength: number = (someValue as string).length
