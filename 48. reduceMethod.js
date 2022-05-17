// method of array
const userCart=[
    {productId: 1, productName: "Apple", price:200},
    {productId: 2, productName: "Orange", price:100},
    {productId: 3, productName: "Banana", price:50},
];

const totalAmmount=userCart.reduce((totalPrice,currentPrice)=>{
    return totalPrice+currentPrice.price;
},0);

console.log(totalAmmount);