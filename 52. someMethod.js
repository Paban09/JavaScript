const product=[
    {proId: 1, proName:"chips", proPrice:100 },
    {proId: 2, proName:"chocolate", proPrice:280 },
    {proId: 3, proName:"juice", proPrice:35 },
    {proId: 4, proName:"Coke", proPrice:25 },
    {proId: 5, proName:"Fanta", proPrice: 50 }

];

const lowToHigh=product.slice(0).sort((a,b)=>{
    return a.proPrice-b.proPrice;
});

console.log(product);
console.log(lowToHigh);