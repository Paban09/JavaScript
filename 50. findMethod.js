const products=[
    {proId: 1, proName:"chips", proPrice:100 },
    {proId: 2, proName:"chocolate", proPrice:280 },
    {proId: 3, proName:"juice", proPrice:35 },
    {proId: 4, proName:"Coke", proPrice:25 },
    {proId: 5, proName:"Fanta", proPrice: 50 }

];


const findProduct= products.find((product)=>product.proId===3);

console.log(findProduct);