function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(product => {
        cartItems.innerHTML += `<p>${product.name} - $${product.price}</p>`;
    });
}

function checkout() {
    alert("Redirecting to payment!");
    localStorage.removeItem("cart");  // Clear cart
}

loadCart();
