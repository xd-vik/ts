// Primitive and References
// [],{},() => References
// string
var myName = "vivek";
// number
var aNum = 20;
// boolean
var isActive = true;
// Arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var fruits = ["apple", "banana"];
// objects
var data = {
    name: "vivek",
    age: 20,
};
// Tuples
var myTuple = ["vivek", 20, true];
//enum
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["NotFound"] = 400] = "NotFound";
    statusCodes[statusCodes["Sucess"] = 200] = "Sucess";
    statusCodes[statusCodes["Accepted"] = 202] = "Accepted";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.Accepted);
// enum as string
var statusString;
(function (statusString) {
    statusString["NotFound"] = "nahi mila Chalo niklo";
    statusString["Sucess"] = "ho gya";
})(statusString || (statusString = {}));
console.log(statusString.Sucess);
// any => Disables type checking
var num = 20;
// unknown => similar to any but used in conditionals
// example
var numOne;
numOne = 1;
if (typeof numOne === "number") {
    console.log("numone is number");
}
// void => as returns nothing
function prints() {
    console.log("print function");
}
prints();
// null and undefined
var Data = null;
var undf = undefined;
//Type Inference
// Automatically knows the datatype
var thenumber = 20;
// Type Annotations
var thenum = 20;
var striring = "vikks";
var mulstring;
mulstring = 20;
mulstring = "viks";
