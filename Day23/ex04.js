// const arr1 = [1,2,3,4,5,6,7,8,9,10];
const products = [
    { id: 1, title: "san pham A", price: 200, quantity: 2, discount: 0.2 },
    { id: 2, title: "san pham B", price: 200, quantity: 1, discount: 0.1 },
    { id: 3, title: "san pham C", price: 200, quantity: 3, discount: 0.05 },
    { id: 4, title: "san pham D", price: 200, quantity: 2, discount: 0.35 },
    ];
const hotSaleProducts =(products) => {
  return products.filter((item) => item.dicount >=0.2);
}

console.log(hotSaleProducts(products))


// const arr2 = arr1.filter((item) => item %5 ===0);
// console.log(arr2);

// const totalProducts = (products) => {
//     let total = 0; 
//     products.forEach((item) => {
//         total += item.price * item.quantity * (1 - item.discount); 
//     });
//     return total; 
//  };
//  console.log(totalProducts(products)); 

// const getProductsName = products.map((item) => item.title);
// console.log(getProductsName);

/**
 *  Dùng phương thức map tạo ra mảng mới với mỗi sản phẩm
 */
const amoutProducts = (products) => {
    
    return products.map((item) => {
       amount = (item.price * item.quantity * (1-item.discount));
        return {...item,amount};
    });

}
console.log(amoutProducts(products));
console.log(products);


