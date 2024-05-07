getCoding.js
// shopping cart:
const cart = [
{
item: "Pizza",
count: 2,
price: 15,
},
{
item: "Garlic Fingers",
count: 1,
price: 10,
},
];
console.log(cart[0].price);

let total = cart[0].price*cart[0].count;
total = total + cart [1]/price * cart[1].count;
console.log(total);
//some text written on my local computer