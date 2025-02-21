let cartCount = 0;

// Event listener for "Add to Cart" button
document.getElementById("addToCartBtn").addEventListener("click", function () {
    cartCount++;  // Increment cart count
    updateCartCount();
});

// Function to update the cart count on the page
function updateCartCount() {
    document.getElementById("cartCount").textContent = cartCount;
}
