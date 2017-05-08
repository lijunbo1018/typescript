function add(x: number, y: number): number {
    return x + y;
}
// type inference
let myAdd: (x: number, y: number) => number = function (x, y) { return x + y; }
// optional and default parameters
function buildName(firstName: string, lastName?: string) {
    return (lastName ? `${firstName} ${lastName}` : firstName);
}
let result1 = buildName('Bob');
// let result2 = buildName('Bob', 'Adams', 'Sr.'); Error: too many parameters
let result3 = buildName('Bob', 'Adams');

function buildNameWithOptionalDefault(firstName: string, lastName = 'Smith') {
    return `${firstName} ${lastName}`;
}
let name1 = buildNameWithOptionalDefault('Bob');
let name2 = buildNameWithOptionalDefault('Bob', undefined);
// let name3 = buildNameWithOptionalDefault('Bob', 2); Error: type of 2 is not string|undefined

function buildNameWithRequiredDefault(firstName = 'Will', lastName: string) {
    return `${firstName} ${lastName}`;
}
// let n1 = buildNameWithRequiredDefault('Smith'); Error: too few parameters
let n2 = buildNameWithRequiredDefault(undefined, 'Smith');

// rest parameters
function constructName(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(' ')}`;
}
let buildNameFun: (fname: string, ...rest: string[]) => string = constructName;
let employeeName = buildNameFun('Joseph', 'Samuel', 'Lucas', 'MacKinzie');

// this and arrow function
let t1 = {
    name: 'test1',
    print: function () {
        return function () {
            // there's an error when pass --noImplicitThis flag to compiler
            console.log(this.name);
        }
    }
}
let p = t1.print();
p(); // print undefined
t1.print()(); // print undefined
let t2 = {
    name: 'test2',
    print: function () {
        return () => {
            console.log(this.name);
        }
    }
}
p = t2.print();
p();
t2.print()();

// fake this parameter
function f(this: void) {
    // console.log(this.name); 'name' dose not exist on type void
}

// Tow overloads
function multiType(arg: { x: number, y: number }): number;
function multiType(arg: number): { x: number, y: number };
// Not overload
function multiType(arg): any {
    if (typeof arg == 'object') {
        const { x, y } = arg;
        return Math.sqrt(x * x + y * y)
    } else if (typeof arg == 'number') {
        return { x: arg, y: arg };
    }
}

// let mul: string = multiType({ x: 1, y: 1 }); Error: number is not assignable to 'string'
// let mul: number = multiType(1); Error: {} not assignable to 'number'