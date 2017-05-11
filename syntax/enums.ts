enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = '123'.length
}

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A];  // 'A'

// const enum will be removed during compilation
const enum E {
    A = 1,
    B = A * 2
}
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// ambient enums
declare enum En {
    A = 1,
    B,
    C = 2
}