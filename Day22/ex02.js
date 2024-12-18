const product ={title: "san pham A", price: 200,
    description:"Thong tin chi tiet abc..."
};
for(key in product) {
    console.log(key);
    console.log(`Gia tri cua ${key} là ${product[key]}`);
}

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));


const arrInfo = [
    ['fullnam:','hoangnm'], 
    ['age', 32], 
    ['address', 'HN'],
];
const obj = {}
for(let index in arrInfo) {
    obj[arrInfo[index][0]] = arrInfo[index][1];
}
console.log(obj)


const cart = {
	products: [
		{ id: 1, title: "san pham A", price: 200, quantity: 2 },
		{ id: 2, title: "san pham B", price: 300, quantity: 4 },
		{ id: 3, title: "san pham C", price: 230, quantity: 1 },
	],

  getTotal: function(){
    // Viết phương thức tính tổng đơn hàng ở đây
    let total = 0;
    for(let i = 0; i<this.products.length;i++){
        const product = this.products[i];
        total += product.price * product.quantity
    }
    return total;
  },
  updateProduct: function(id, quantity){
    // Xây dựng phương thức cập nhật số lượng của sản phẩm theo id, sản phẩm
//     const product = this.products.find(p => p.id = id);
//     if(product){
//         product.quantity = quantity;
//         console.log(`Cap nhat san pham ${product.title} thanh cong`);

//     }else{
//         console.log(`Khong tim thay san pham với id: ${id}`)
//     }
//   }
  }
};
console.log(cart.getTotal())
// console.log("Tổng đơn hàng:", cart.getTotal());
// cart.updateProduct(3, 5); 
// console.log("Tổng đơn hàng sau cập nhật:", cart.getTotal());
