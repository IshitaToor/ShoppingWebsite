// JavaScript placeholder – add interactivity here if needed
console.log("Product grid loaded.");
function addToCart(id, name, price, image) {
    // Example: Add to localStorage cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, name, price, image, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
  
    showToast(`${name} added to cart`);
  }
  
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
  
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }

  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function updateCartDisplay() {
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotalSpan = document.getElementById("cart-total");
    cartItemsDiv.innerHTML = "";
  
    let total = 0;
  
    cart.forEach((item, index) => {
      total += item.product.price * item.quantity;
  
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        ${item.product.name} - $${item.product.price} x ${item.quantity}
        <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
        <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsDiv.appendChild(div);
    });
  
    cartTotalSpan.textContent = total.toFixed(2);
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const index = cart.findIndex(item => item.product.id === productId);
  
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
  
    saveCart();
    updateCartDisplay();
  }
  
  function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
  
    cart[index].quantity = newQuantity;
    saveCart();
    updateCartDisplay();
  }
  
  function removeFromCart(index) {
    alert(`${cart[index].product.name} removed from cart`);
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
  }
  
  function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    alert("Cart cleared");
  }
  
  function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <strong>${product.name}</strong><br/>
        Price: $${product.price} <br/>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  displayProducts();
  updateCartDisplay();    
  
  