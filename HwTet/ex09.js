const products = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 }
];

const cart = {};

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <input type="number" id="quantity-${product.id}" min="0" value="0" style="width: 50px;">
                <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
            </td>
        </tr>
    `).join('');
}

function addToCart(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        cart[productId] = (cart[productId] || 0) + quantity;
        quantityInput.value = 0;
        renderCart();
        showCart(); 
    }
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceEl = document.getElementById('total-price');
    const cartItems = Object.keys(cart);

    if (cartItems.length > 0) {
        let totalPrice = 0;
        cartList.innerHTML = cartItems.map((productId, index) => {
            const product = products.find(p => p.id === parseInt(productId));
            const quantity = cart[productId];
            const total = product.price * quantity;
            totalPrice += total;
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <input type="number" id="cart-quantity-${productId}" min="1" value="${quantity}" style="width: 50px;">
                    </td>
                    <td>${total}</td>
                    <td><button onclick="removeFromCart(${productId})">Xóa</button></td>
                </tr>
            `;
        }).join('');
        totalPriceEl.innerText = totalPrice;
    } else {
        cartList.innerHTML = '<tr><td colspan="6">Giỏ hàng không có sản phẩm</td></tr>';
        totalPriceEl.innerText = '0';
    }
}

function showCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'block'; 
    alert("Bạn đã thêm giỏ hàng thành công");
}

function updateCart() {
    Object.keys(cart).forEach(productId => {
        const quantityInput = document.getElementById(`cart-quantity-${productId}`);
        const newQuantity = parseInt(quantityInput.value);
        if (newQuantity > 0) {
            cart[productId] = newQuantity;
        } else {
            delete cart[productId];
        }
    });
    renderCart();
    alert("Đã cập nhật giỏ hàng");
}

function removeFromCart(productId) {
    delete cart[productId];
    renderCart();
    if (Object.keys(cart).length === 0) {
        hideCart(); 
    }
}

function clearCart() {
    Object.keys(cart).forEach(productId => delete cart[productId]);
    renderCart();
    hideCart(); 
}

function hideCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'none'; 
}

renderProducts();