// interface => objects mainly to make a face that my obj contains that bla bla bla bla

interface User {
  name: string;
  email: string;
  age?: number;
}

let abcd: User = {
  name: "vivek",
  email: "vivek@vik.com",
  age: 20,
};

// for optional age?:number

// Extend Interfaces
// have all the parent property

interface Admin extends User {
  isAdmin: boolean;
}

function abc(obj: Admin) {
  console.log(obj);
}

abc({ name: "vivek", email: "viks@vik.com", isAdmin: true });

// if multiple interfaces with same then they merged in all one

// TYPE ALIAS

// types to be defined separately from the variables usem

type chacha = number;

let A: chacha = 20;

// More example

type mul = string | number | boolean; // also "|"  works as union "or"

let anum: mul = true;

// intersection "and" "&"

type Users = {
  name: string;
  email: string;
};

type Admins = User & {
  isadmin: boolean;
};
