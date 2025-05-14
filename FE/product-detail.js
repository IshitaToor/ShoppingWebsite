// Retrieve the selected product from localStorage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Populate the page
if (product) {
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = `INR ${product.price}`;
  document.getElementById("product-description").textContent = product.description;
} else {
  console.error("Product not found");
  document.body.innerHTML = "<p>Product not found. Please go back to the shop.</p>";
}

// Quantity logic
let quantity = 1;
const quantitySpan = document.getElementById("quantity");
document.getElementById("increase").addEventListener("click", () => {
  quantity++;
  quantitySpan.textContent = quantity;
});
document.getElementById("decrease").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
  }
});

// Size selection logic
const sizeButtons = document.querySelectorAll(".size-btn");
sizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    sizeButtons.forEach(btn => btn.classList.remove("active"));
    // Add 'active' to the clicked one
    button.classList.add("active");
  });
});