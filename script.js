let firstName = "Joseph";
//console.log(firstName);
//console.log("Hello world");

let age = 40;
let isCool = true;

//console.log(age);
//console.log(isCool);
//console.log(firstName, age, isCool);
//console.log("It's very clear that the entire class thinks " + firstName + " who is " + age + " years old " + "is cool.");

let price = 10;
let quantity = 4;
//console.log(price * quantity);
//console.log(price > 5);
//console.log(quantity === "4");//strictly equal
//console.log(quantity == "4");//loosely equal

///Functions
function sayHello() {
    console.log("Hello!");
}
//sayHello();

function greeting(fullName){ // in the parentheses are "parameters"
    console.log("Hello, " + fullName + "!");
}
//greeting("Joseph"); //in the parentheses is the argument
//greeting("Adedayo");
//greeting("Ezra");

function formatAge(name, age){
    let formattedAge = `${name} is ${age} years old.`;
   // let formattedAge = name +  " is " + age + " years old.";
   return formattedAge;
   console.log(formattedAge);
}
console.log(formatAge("Joseph", 40));

// A string is just text. You can join strings together with a plus sign.
let favoriteFood = "pizza";
console.log("My favorite food is " + favoriteFood + ".");

// Arrays are lists. The first item is at position 0 (computers love starting at 0).
let classmates = ["Joseph", "Adedayo", "Ezra"];
console.log(classmates);
console.log("The first classmate is " + classmates[0]);

// You can add a new item to the end of an array with push().
classmates.push("Maya");
console.log(classmates);

// An if statement lets the program make a decision.
if (age >= 18) {
    console.log(firstName + " is an adult.");
} else {
    console.log(firstName + " is under 18.");
}

// A loop repeats code. This one says hello to every classmate in the list.
for (let classmate of classmates) {
    console.log("Hello, " + classmate + "!");
}

// This function does a little math and gives the answer back with return.
function calculateTotal(itemPrice, itemQuantity) {
    return itemPrice * itemQuantity;
}

let total = calculateTotal(price, quantity);
console.log("The shopping total is $" + total + ".");

// === checks both the value AND the type. This is usually the better choice.
console.log(4 === "4"); // false: number 4 and text "4" are different types
console.log(4 === 4); // true: both are numbers with the same value