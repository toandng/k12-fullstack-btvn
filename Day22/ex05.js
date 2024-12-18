const product = {title: 'San pham A', price: 200,
    descrition: 'Mô ta san pham',
    stock: 2000,
    sku: "sp0123",
    size: "XL"
}
const {title, price, ...other } = product;
// destructuring áp dụng với object và array 
/**
 * rest parameter: là phần tử còn lại của object(array) khi destructuring
 * rest luôn xuất hiện ở cuối khai báo trong cấu trúc destructuring
 */
console.log(price)
console.log(other);

/**
 * Spread Oparater
 * -Dùng đê trải các phần tử (hoặc thuộc tính) của array (object) cũ 
 * vào 1 khai báo array (object) mới
 * -Spread có thể dùng shallow copy, gom(gộp) object, array
 */
const productCopy = {...product, color: "yellow"}
console.log(productCopy);

const infor1 = {a: 1, b:2};
const infor2 = {c:3 , d:4};
const infor3 = {...infor1, ...infor2};
console.log(infor3)