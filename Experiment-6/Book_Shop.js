// JavaScript code for the shopping cart functionality
const productList = document.querySelector(".display");
const cart = document.getElementById("cart");
const totalCostElement = document.getElementById("total-cost"); // Get the total cost element

const products = [
    { id: 1, name: "Throne of Glass", price: 12.99 },
    { id: 2, name: "Crown of Midnight", price: 13.99 },
    { id: 3, name: "Heir of Fire", price: 11.99 },
    { id: 4, name: "Queen of Shadows", price: 14.99 },
    { id: 5, name: "Empire of Storms", price: 15.99 },
    { id: 6, name: "Tower of Dawn", price: 13.49 },
    { id: 7, name: "Kingdom of Ash", price: 16.99 },
    { id: 8, name: "The Assassin's Blade", price: 10.99 },
    { id: 9, name: "The Invisible Life of Addie LaRue", price: 16.99 },
];

const cartItems = [];

// Function to display products
function displayProducts() {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("book-container");
        productElement.innerHTML = `
            <img src="./images/${product.name}.jpg" alt="${product.name}">
            <p>${product.name} - $${product.price}</p>
            <button class="add-button" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to add an item to the cart
function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) {
        return;
    }

    const existingCartItem = cartItems.find((item) => item.id === productId);
    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    updateTotalCost();
    displayCart();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
        cartItems.splice(index, 1);
        displayCart();
        updateTotalCost();
    }
}

// Function to display the cart
function displayCart() {
    cart.innerHTML = "";
    cartItems.forEach((item) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.innerHTML = `
            <p>${item.name} - $${item.price} - Quantity: ${item.quantity}</p>
            <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cart.appendChild(cartItemElement);
    });
}
function updateTotalCost() {
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalCostElement.textContent = `Cart: $${totalCost.toFixed(2)}`; // Display total cost with 2 decimal places
}

// Initial display
displayProducts();
