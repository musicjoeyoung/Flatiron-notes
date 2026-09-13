var firstVar = 1;
var firstVar = 2; //var allows re-declaration & re-assign - please avoid!!

//console.log(firstVar)


let secondVar = 1;
//console.log(secondVar)
//let secondVar = 2; //let does not allow re-declaration
secondVar = 2; //let DOES allow re-assigning
//console.log(secondVar)

const thirdVar = 1;
//const thirdVar = 2;//const does not allow re-declaration
//thirdVar = 2; //const does NOT allow re-assigning
//console.log(thirdVar)


//SCOPE
/* let price = 100;//globally scoped

if(price >= 100){
    console.log("This is accessing globally scoped variable 'price' from inside one level deeper " + price);
    const discount = price * 0.10;
    console.log("This is accessing locally scoped variable 'discount' from inside the same function " + discount)
    price = price - discount;
}
//console.log("This is outside the scope of where discount was declared" + discount);
//const discount = 1000;

//console.log(discount)
const tax = price * 0.08;
const finalPrice = price + tax;

console.log(finalPrice) */

let price = 100;
let discount = 0;

if(price >= 100){
    discount = 0.10;
    console.log("Applying 10% discount");
} else if (price >=50){
    discount = 0.05;
    console.log("Applying 5% discount");
}

price = price - (price * discount);
console.log("Price after discount: " + price);

const tax = price * 0.08;
console.log("Tax: " + tax);
const finalPrice = price + tax;
console.log("Final Price: " + finalPrice);
console.log(finalPrice)