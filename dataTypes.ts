// Primitive and References

// [],{},() => References

// string

let myName: string = "vivek";

// number

let aNum: number = 20;

// boolean

let isActive: boolean = true;

// Arrays

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let fruits: string[] = ["apple", "banana"];

// objects

let data: {
  name: string;
  age: number;
} = {
  name: "vivek",
  age: 20,
};

// Tuples

let myTuple: [string, number, boolean] = ["vivek", 20, true];

//enum

enum statusCodes {
  NotFound = 400,
  Sucess = 200,
  Accepted = 202,
}

console.log(statusCodes.Accepted);

// enum as string

enum statusString {
  NotFound = "nahi mila Chalo niklo",
  Sucess = "ho gya",
}

console.log(statusString.Sucess);

// any => Disables type checking

let num: any = 20;

// unknown => similar to any but used in conditionals
// example

let numOne: unknown;
numOne = 1;

if (typeof numOne === "number") {
  console.log("numone is number");
}

// void => as returns nothing

function prints(): void {
  console.log("print function");
}

prints();

// null and undefined

let Data: null = null;
let undf: undefined = undefined;

//Type Inference
// Automatically knows the datatype

let thenumber = 20;

// Type Annotations

let thenum: number = 20;
let striring: string = "vikks";

let mulstring: number | string;

mulstring = 20;
mulstring = "viks";
