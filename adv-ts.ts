// 1. Generics (Reusable Code)

// Generics ka use karke hum flexible aur reusable code bana sakte hain. Yeh aapko type-safe code likhne mein madad karte hain.

function getArray<T>(items: T[]): T[] {
  return items;
}

const numArray = getArray<number>([1, 2, 3]);
const strArray = getArray<string>(["a", "b"]);

// Generic Class

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue());

// 2. Decorators (Advanced)

// Decorators ka use classes, methods, properties, etc., ko modify karne ke liye hota hai.

function Logger(constructor: Function) {
  console.log("Logging...");
}

@Logger
class Car {
  constructor(public model: string) {}
}

// Method Decorator

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method ${key} is called.`);
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3); 

// 3. Advanced Types

// Intersection Types (&):


type Employee = { name: string } & { id: number };
const emp: Employee = { name: "Rahul", id: 1 }; // ✅

// Type Guards:

// TypeScript mein type guards ka use karke runtime par types check kar sakte haiiiiii

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(`ID is a string: ${id}`);
  } else {
    console.log(`ID is a number: ${id}`);
  }
}
printId("ABC123"); 
printId(123); 

// Mapped Types:

// Yeh existing types ko transform karne ke liye use hote haiiiii

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// const user: ReadonlyUser = { name: "Rahul", age: 25 };
// user.name = "Ankit";

// cannot assign due to readonly property

// 4. Utility Types

// TypeScript mein kuch utility types hote hain jo common type transformations ke liye use hote haiiiii

// Partial<T>:

// Yeh ek type ke sabhi properties ko optional banata haiii

interface User {
  name: string;
  age: number;
}

const user: Partial<User> = { name: "Rahul" }; 

// Readonly<T>:


const user: Readonly<User> = { name: "Rahul", age: 25 };
user.age = 30; // Cannot assign to 'age' because it is a read-only property.

// Pick<T, K>:


type UserName = Pick<User, "name">;
const userName: UserName = { name: "Rahul" }; 

// Omit<T, K>:

type UserWithoutAge = Omit<User, "age">;
const userWithoutAge: UserWithoutAge = { name: "Rahul" }; 

// 5. Modules & Namespaces

// Modules:


// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
// import { add } from "./math";
// console.log(add(2, 3)); 

// Namespaces:

// Namespaces ka use karke hum code ko logical groups mein organize kar sakte haiiiii
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); 

// 6. Async/Await in TypeScript

function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data); 
}

getData();

// 7. TypeScript Configuration (tsconfig.json)

{
  "compilerOptions": {
    "target": "ES6", // Compile to ES6
    "module": "CommonJS", // Use CommonJS modules
    "outDir": "./dist", // Output directory
    "strict": true // Enable strict type checks
  }
}


