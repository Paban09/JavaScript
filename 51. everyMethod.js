const product=[
    {proId: 1, proName:"chips", proPrice:100 },
    {proId: 2, proName:"chocolate", proPrice:280 },
    {proId: 3, proName:"juice", proPrice:35 },
    {proId: 4, proName:"Coke", proPrice:25 },
    {proId: 5, proName:"Fanta", proPrice: 50 }

];

const ans = product.every((products)=>products.proPrice<300);

console.log(ans);