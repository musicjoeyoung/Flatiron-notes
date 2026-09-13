Problem: a store needs a program that:
- receives an item's price
- gives 10% off if the price is $100+
- adds 8% sales
- outputs the final price

We need identify:
- input: price
- output: final price

Break down:
receive price of item --> if price $100 or more --> calculate discount --> subtract discount --> calculate tax --> add tax --> final price

Pseudocode:
```
START

Get price (declare the price item or "know the price")

IF price >= 100
    discount = price x 0.10
    price = price - discount
ELSE IF price >=50
    discount = 5%
ELSE
    discount = 0%

tax = price x 0.08
final price = price + tax

Output final price

END

```

Predict the result:

For $100:
    - 10% discount = $10
    - discounted price = $90
    - 8% tax = $7.20
    - final price = $97.20
    - **NEW constraint: $50-99.9 gets a 5% discount
    - anything less than $50 gets no discount

Pseudocode to JavaScript
```js
let price = 100;

if(price >= 100){
    const discount = price * 0.10;
    price = price - discount;
}

const tax = price * 0.08;
const finalPrice = price + tax;

console.log(finalPrice)

```

//WITH new constraints
```js
let price = 100;
let discount = 0;

if(price >= 100){
    discount = 0.10;
} else if (price >=50){
    discount = 0.05;
}

price = price = (price * discount);

const tax = price * 0.08;
const finalPrice = price + tax;

console.log(finalPrice)

```