// classes are blueprint of the objects

// Constructor ek special method hota hai jo class ke objects banate waqt call hota hai.

// Yeh properties ko initialize karta hai (matlab unhe starting values deta hai).

// Har class ka ek constructor hota hai (agar aap define nahi karte, toh TypeScript ek default constructor use karta hai).

class User {
  name: string;
  email: string;
  age?: number;
  constructor(name: string, email: string, age?: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

// In short

class user {
  constructor(public name: string, public email: string, public age?: number) {}
  sayhello() {
    console.log(`Hello ${this.name}`);
  }
}

let abcdef = new user("vivek", "vik@vik.com", 20);
abcdef.sayhello();

// Access Modifiers
// Public Private Protected

// Public: By default, all properties and methods are public in TypeScript.
// private: If you declare a property or method as private, it cannot be accessed outside the class.
// protected: If you declare a property or method as protected, it can be accessed within the class and its subclasses.

// Real life example

//    Public: Car ka color sab dekh sakte hain.

//   Private: Car ka engine sirf mechanic access kar sakta hai.

//  Protected: Car ka fuel level sirf car aur uske child classes (e.g., ElectricCar) access kar sakte hain.

class Car {
  public color: string;
  private engine: string;
  protected fuelLevel: number;

  constructor(color: string, engine: string, fuelLevel: number) {
    this.color = color;
    this.engine = engine;
    this.fuelLevel = fuelLevel;
  }
  // public

  start() {
    console.log(
      `starting the ${this.color} color car with ${this.engine} engine`
    );
  }

  // private
  private checkEngine() {
    console.log("Engine is working fine");
  }

  // protected

  protected checkFuelLevel() {
    console.log(`Fuel level is ${this.fuelLevel}`);
  }
}

let car1 = new Car("red", "v8", 100);

car1.start();
// console.log(car1.checkEngine()); // throws error

// Inheritance
// Inheritance ka matlab hai ki ek class dusri class ke properties aur methods ko inherit kar sakti hai

class ElectricCar extends Car {
  battery: number;
  constructor(
    color: string,
    engine: string,
    fuelLevel: number,
    battery: number
  ) {
    super(color, engine, fuelLevel); // super used the constructor of parent class
    this.battery = battery;
  }

  checkBattery() {
    console.log(`Battery level is ${this.battery}`);
  }
}

let car2 = new ElectricCar("blue", "v12", 100, 1000);
car2.start();
car2.checkBattery();

// Static properties aur methods class ke objects ke bina directly class ke naam se access kiye ja sakta haiiiiii

// Math class static methods: Math.sqrt(),

class MathUtils {
  static PI: number = 3.14;

  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));

// Getter and setter

// Yeh special methods hote hain jo properties ko access aur modify karne ke liye use hote haiii

class BankAccount {
  private _balance: number = 0;

  // Getter
  get balance(): number {
    return this._balance;
  }

  // Setter
  set balance(amount: number) {
    if (amount < 0) {
      console.log("Invalid amount!");
      return;
    }
    this._balance = amount;
  }
}

const account = new BankAccount();
account.balance = 1000;
console.log(account.balance);
// account.balance = -500; //  Invalid amount
