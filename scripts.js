const products = [
    { id: 1, name: "Luxury Handbag", price: 120, image: "handbag.jpg" },
    { id: 2, name: "Designer Sneakers", price: 85, image: "sneakers.jpg" }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    let productCard = document.createElement("div");
    productCard.innerHTML = `<img src="${product.image}" alt="${product.name}">
                             <h2>${product.name}</h2>
                             <p>Price: $${product.price}</p>
                             <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(productCard);
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products.find(p => p.id === productId));
    localStorage.setItem("cart", JSON.stringify(cart));
}
