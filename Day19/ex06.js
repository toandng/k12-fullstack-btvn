const cart = [
    { id: 1, title: 'tivi xiami X', price: 10000000, quantity: 2 },
    { id: 2, title: 'IPhone 16 promax', price: 30000000, quantity: 3 },
];

function caclCart(cart) {
    total = 0;
    
    // for (let i = 0; i < cart.length; i++) {
    //     total = cart[i].price * cart[i].quantity;
    // }
    // console.log(total);
    for(value of cart){
        total += value.price * value.quantity;
    }
    console.log(total)
}
caclCart(cart);