// var declaration
// Scoping rules
function sumMatrix1(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix1([[1, 2], [3, 4, 5], [6, 7, 8, 9]]));

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}

// let declaration
function foo(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }
    return a;
    // return b; Error: can not find 'b'
}

function sumMatrix2(matrix: number[][]) {
    var sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix2([[1, 2], [3, 4, 5], [6, 7, 8, 9]]));

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}

// const declaration
const numLivesForCat = 9;
const kitty = {
    name: 'Aurora',
    numLives: numLivesForCat
};
kitty.name = 'Kitty';
kitty.numLives--;

// destructuring
let input = [1, 2];
let [first, second] = input;
[first, second] = [second, first];
function print([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
print([first, second]);

let [one, ...rest] = [1, 2, 3, 4];

let object = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
let { b = 10, c } = object;
let { a: keyA, b: keyB } = object;
let { a, ...passThrough } = object;

let arr1 = [1, 2];
let arr2 = [3, 4];
let bothPlus = [0, ...arr1, ...arr2, 5];

let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
let search = { ...defaults, food: 'rich' };

class C {
    p = 12;
    m() {

    }
}
let instance = new C();
let clone = { ...instance };
clone.p;
// clone.m(); Error: method m lost in spread