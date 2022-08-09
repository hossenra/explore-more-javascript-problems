// [45, 64, 33, 29];

const shoppingCart = [
    {name: "shoe", price: 1200},
    {name: "shirt", price: 2200},
    {name: "pant", price: 3700},
    {name: "belt", price: 600}
];

function totalPrice(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expence = totalPrice(shoppingCart);
console.log("Total expense today:", expence);