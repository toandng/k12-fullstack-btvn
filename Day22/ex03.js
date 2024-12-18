const userInfor = {
    fullname: "Duc Toan",
    learn:function(lesson, time){
         console.log(`${this.fullname} hoc ${lesson} luc ${time}`)
    },
    getName: function () {
        console.log(this.fullname)
    }
};

userInfor.learn("Js","toi nay");
userInfor.getName();

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
}
console.log(cart.getTotal())
